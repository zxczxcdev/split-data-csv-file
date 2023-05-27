# Công cụ lấy dữ liệu trong file CSV

## Cài đặt NPM cần thiết :

```sh
npm i csv-parser
```

## Lưu ý :

- Cần phải chỉnh sửa `const extractedValue = Object.values(row)[n]; `

- Thay `'n'` bằng chỉ mục của cột cần trích xuất

- n là chỉ mục của cột mà bạn muốn trích xuất giá trị. Chỉ mục tính từ 0, với 0 là cột đầu tiên, 1 là cột thứ hai và tiếp tục.

- Object.values(row) trả về một mảng chứa tất cả các giá trị của các cột trong dòng hiện tại. Bằng cách truy cập vào phần tử tại chỉ mục n, bạn có thể lấy giá trị của cột tương ứng.
