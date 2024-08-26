### 1. Trường hợp có hai nghiệm phân biệt thực

- **Testcase 1:**
  - **Input:** \( a = 1, b = -3, c = 2 \)
  - **Expected Output:** Nghiệm là \( x_1 = 2 \), \( x_2 = 1 \)

### 2. Trường hợp có nghiệm kép (nghiệm thực duy nhất)

- **Testcase 2:**
  - **Input:** \( a = 1, b = -2, c = 1 \)
  - **Expected Output:** Nghiệm kép là \( x_1 = x_2 = 1 \)

### 3. Trường hợp phương trình không có nghiệm thực

- **Testcase 3:**
  - **Input:** \( a = 1, b = 2, c = 5 \)
  - **Expected Output:** Không có nghiệm thực (nghiệm phức)

### 4. Trường hợp hệ số a bằng 0 (không phải phương trình bậc 2)

- **Testcase 4:**
  - **Input:** \( a = 0, b = 2, c = -4 \)
  - **Expected Output:** Nghiệm là \( x = 2 \) (phương trình bậc nhất)

### 5. Trường hợp tất cả các hệ số đều bằng 0

- **Testcase 5:**
  - **Input:** \( a = 0, b = 0, c = 0 \)
  - **Expected Output:** Vô số nghiệm (mọi giá trị của x đều là nghiệm)

### 6. Trường hợp phương trình không có nghiệm

- **Testcase 6:**
  - **Input:** \( a = 1, b = 0, c = 0 \)
  - **Expected Output:** Nghiệm là \( x = 0 \) (nhưng phải chú ý nếu b và c khác 0, phương trình có thể không có nghiệm)

### 7. Trường hợp nghiệm là số âm

- **Testcase 7:**
  - **Input:** \( a = 1, b = 2, c = 1 \)
  - **Expected Output:** Nghiệm kép là \( x = -1 \)
