ปริศนาตู้เกมแทงม้า
===

## วัตถุประสงค์
- ฝึกการตีโจทย์การจัดเก็บข้อมูลเพื่อให้มีประสิทธิภาพสูงสุดจากวัตถุประสงค์ของการใช้งาน
- ฝึกไหวพริบและตรรกะ เพิ่มจิตวิญญาณความเป็น developer ให้สูงขึ้น


## เงื่อนไข
- งานนี้อนุญาตให้ปรึกษาและช่วยหาข้อมูลกันได้เต็มที่ แต่ทุกคนต้องเข้าใจวิธีการหาคำตอบ และลองหาคำตอบด้วยตัวเอง
จะทำการสัมภาษณ์เดี่ยวห้องเย็นหลังสิ้นสุดกำหนดส่งการบ้าน
- ความคาดหวังของวิธีการหาคำตอบในแต่ละชุดข้อมูลต้องมี Process time น้อยกว่า 1 วินาที โดยสามารถจับเวลาเพื่อหาเวลาประมวลผลโดยใช้วิธีดังนี้

```javascript
console.time('ชื่ออ้างอิง'); // เริ่มจับเวลา
// -----------------------------------
// ส่วนของโค้ดประมวลผลระหว่างการจับเวลา
// ให้เขียนโค้ดแก้ปัญหาที่นี่
// -----------------------------------
console.timeEnd('ชื่ออ้างอิง'); // แสดงเวลาที่นับตั้งแต่เริ่มจับเวลา
```

ตัวอย่างอยู่ในไฟล์ `/app/hw_1.ts`, `/app/hw_2.ts`, `/app/hw_3.ts`



## การติดตั้ง
Clone โปรเจกต์นี้ และเข้าไปยังไดเรกทอรีของโปรเจกต์ จากนั้นพิมพ์
```shell
npm install
```

### รายละเอียดไฟล์
- `/app/hw_1.ts`, `/app/hw_2.ts`, `/app/hw_3.ts` - พื้นที่ทำการบ้านข้อต่างๆ
- `/app/data` - ไดเรกทอรีรวมไฟล์ข้อมูลที่ใช้แก้ปัญหาโจทย์
- `/app/interfaces.ts` - Interface ของข้อมูล


### การรันไฟล์ TypeScript (.ts)

ให้พิมพ์คำสั่งดังนี้
```bash
npx ts-node [ชื่อไฟล์]
```

เช่น

```bash
npx ts-node /app/hw_1.ts
```


## โจทย์

เราเป็นเจ้าของตู้เกมแทงม้าตู้หนึ่ง ถ้าลูกค้าเล่นเสียจะเสียเงิน 1-100 บาท กล่าวคือรอบนั้นเราจะได้กำไร
แต่ถ้าลูกค้าเล่นได้จะได้เงินตั้งแต่ 1-6,000 บาท กล่าวคือรอบนั้นเราจะขาดทุน

ซึ่งจะมีข้อมูลรายการ transactions โดยมีอินเตอร์เฟสดังนี้

```typescript
interface Transaction {
  name: string;
  profit: number;
}
```

โดยข้อมูลจะอยู่ในรูปแบบ `Transaction[]` ไล่ตั้งแต่ transaction ที่ 1 จนถึง N

ตัวอย่างเช่น มีข้อมูล 3 รายการ (N = 3) ดังนี้

```json
[
  {
    "name": "Evan Ortiz",
    "profit": 87
  },
  {
    "name": "Ray Allison",
    "profit": 359
  },
  {
    "name": "Lola Wise",
    "profit": -4982
  },
]
```

เราจะได้กำไร 2 ครั้ง จาก Evan Ortiz, Ray Allison
และขาดทุน 1 ครั้งจาก Lola Wise เป็นต้น

ข้อมูลใน `real_transactions.json` จะมีจำนวนรายการทั้งหมด 150,000 รายการ

### ข้อที่ 1 (`hw_1.ts`) [ง่าย]
ถ้ากำหนดให้ field name เหมือนกันหมายถึงผู้เล่นคนเดียวกัน จงหาจำนวนของผู้เล่นทั้งหมด 

เช่น จากตัวอย่างไฟล์ `sample_transactions.json`
มีผู้เล่นทั้งหมด `"9"` คน (เพราะมี Alfred Bryant ซ้ำกันสองรายการ จึงนับแค่ 1)

ข้อมูลที่ต้องการใช้หาคำตอบจริงคือรายการจาก `real_transactions.json`

### ข้อที่ 2 (`hw_2.ts`) [ปานกลาง]
กำหนดให้มีรายการคำค้นของชื่อต้น (ไม่รวมชื่อท้าย) เป็นชนิด `string[]` และ**สามารถมีรายการซ้ำได้** ให้หาผลรวมของกำไรทั้งหมดในรายการ transaction ที่มีชื่อต้นตรงกับรายการคำค้นของชื่อต้น หากมีรายการซ้ำให้รวมรายการที่ซ้ำไปด้วย

เช่น จากตัวอย่างไฟล์ `sample_transactions.json` ผลรวมกำไรทั้งหมดของรายการคำค้นชื่อต้น `["Alfred", "Susan", "Emilie", "Susan"]` คือ `"15 บาท"` (1+(2*2)-10+4+7+9)

ข้อมูลที่ต้องการใช้หาคำตอบจริงคือรายการจาก `real_transactions.json` และใช้รายการคำค้นจากไฟล์ `real_query.json`

### ข้อที่ 3 (`hw_3.ts`) [ยากมาก]
จงหา
- ผลรวมของกำไรมากที่สุดจากจำนวนรายการที่**ติดกัน** 
- จำนวนรายการที่ทำให้ผลรวมของกำไรมากที่สุด โดยหากมีความเป็นไปได้ของคำตอบมากกว่า 1 รูปแบบ ให้เลือกค่าที่น้อยที่สุด

เช่น จากตัวอย่างไฟล์ `sample_transactions.json `
เราจะได้ผลรวมของกำไรมากที่สุดคือ `"33 บาท"` และมีจำนวนรายการที่ติดกันจากผลรวมดังกล่าวรวมทั้งสิ้น `"7 รายการ"` นั่นคือผลรวมรายการที่**ติดกัน**ตั้งแต่ transaction ที่ 4 จนถึง 10 คือ 4+5+6+7-8+9+10 รวม 7 รายการ (ซึ่งต้องยอมรวม -8 เข้าไปเพื่อเอา 9 กับ 10 ด้านหลัง เพื่อทำให้ได้ผลลัพธ์มากที่สุด เป็นต้น)

ข้อมูลที่ต้องการใช้หาคำตอบจริงคือรายการจาก `testcase_3_1.json`, `testcase_3_2.json`, `testcase_3_3.json`, `testcase_3_4.json`, `real_transactions.json`

## คำแนะนำ
- ให้เขียนโปรแกรมทดสอบกับข้อมูลในไฟล์ `sample_transactions.json` ก่อน จนได้ผลลัพธ์ที่ตรงกับตัวอย่างแล้ว ค่อยลองกับ `testcase_*.json` หรือ `real_transactions.json`
- ลองเอาผลลัพธ์ไปเปรียบเทียบกับเพื่อนว่าตรงกันไหม