
# Quy tắc Kiểm tra Feature-Sliced Design Layer Import Constraints

## Giới thiệu

File này cung cấp quy tắc kiểm tra cho cấu trúc **Feature-Sliced Design (FSD)** nhằm đảm bảo rằng việc import giữa các lớp (layer) và các lát (slice) tuân thủ đúng nguyên tắc thiết kế.

### Các layer trong FSD

Các lớp (layer) được sắp xếp từ cao đến thấp như sau:

1. `app`
2. `views`
3. `widgets`
4. `features`
5. `entities`
6. `shared`

## Luật Import

1. **Không được import từ layer "cao hơn" sang layer "thấp hơn".**  
   Ví dụ: `features` không được phép import từ `app` hoặc `processes`.

2. **Không được import giữa các lát (slice) trong cùng một layer, trừ `app` và `shared`.**  
   - Ví dụ: Lát `aaa` trong `features` không được import từ lát `bbb` trong cùng lớp.

3. **Lớp `app` và `shared` có thể import lẫn nhau tự do.**

4. **Lớp** `pages` chỉ sử dụng để làm route thôi, không phải có tác dụng là pages trong fsd

## Cách hoạt động

1. **Phân tích đường dẫn file hiện tại:**  
   File được phân tích để xác định thuộc về lớp và lát nào trong cấu trúc FSD.

2. **Phân tích đường dẫn import:**  
   Đường dẫn của file được import cũng được phân tích để xác định lớp và lát tương ứng.

3. **Áp dụng quy tắc kiểm tra:**  
   - Kiểm tra xem lớp của file import có "cao hơn" lớp hiện tại không.  
   - Kiểm tra việc import giữa các lát trong cùng lớp (nếu không thuộc `app` hoặc `shared`).

## Cấu trúc Mã

### Hàm `getLayerIndex(layerName)`

Trả về chỉ số của lớp trong danh sách `LAYERS`. Trả về `-1` nếu không tìm thấy.

```javascript
function getLayerIndex(layerName) {
  return LAYERS.indexOf(layerName);
}
```

### Hàm `getLayerFromResolvedPath(filepath)`

Trích xuất lớp từ đường dẫn file đầy đủ.

```javascript
function getLayerFromResolvedPath(filepath) {
  const parts = filepath.split(path.sep);
  const srcIndex = parts.indexOf("src");
  if (srcIndex === -1 || srcIndex === parts.length - 1) {
    return null;
  }
  return parts[srcIndex + 1];
}
```

### Hàm `parseFsdLayerInfo(filepath)`

Phân tích đường dẫn file để xác định lớp và lát.

```javascript
function parseFsdLayerInfo(filepath) {
  const layer = getLayerFromResolvedPath(filepath);
  if (!layer || !LAYERS.includes(layer)) {
    return null;
  }
  const slice = getSliceNameFromResolvedPath(filepath);
  return { layer, slice };
}
```

### Hàm `create(context)`

Tạo context kiểm tra và thực hiện các quy tắc kiểm tra import.

```javascript
create(context) {
  const currentFilePath = context.getFilename();
  const currentInfo = parseFsdLayerInfo(currentFilePath);
  if (!currentInfo) {
    return {};
  }
  const { layer: currentLayer, slice: currentSlice } = currentInfo;
  const currentLayerIndex = getLayerIndex(currentLayer);

  return {
    ImportDeclaration(node) {
      const importPath = node.source.value;
      const resolvedFilePath = resolve(importPath, context);
      if (!resolvedFilePath) {
        return;
      }

      const targetInfo = parseFsdLayerInfo(resolvedFilePath);
      if (!targetInfo) {
        return;
      }

      const { layer: importLayer, slice: importSlice } = targetInfo;
      const importLayerIndex = getLayerIndex(importLayer);

      // Kiểm tra theo quy tắc
    }
  };
}
```

## Hướng dẫn sử dụng

1. Cài đặt gói `eslint` và plugin tương ứng.
2. Thêm quy tắc này vào file cấu hình `.eslintrc`:

   ```json
   {
     "rules": {
       "fsd-layer-import-constraints": "error"
     }
   }
   ```

3. Kiểm tra mã nguồn bằng cách chạy lệnh:

   ```bash
   npx eslint .
   ```

## Kết luận

Quy tắc này giúp đảm bảo cấu trúc **Feature-Sliced Design** được duy trì, giúp mã nguồn dễ bảo trì và phát triển lâu dài.
