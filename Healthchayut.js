function calculatorBMI(){
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    let bmi = (weight / (height * height)) * 10000;
    document.getElementById("bmiresult").innerHTML = "BMI = " + bmi.toFixed(2);
    document.getElementById('hello').style.display = 'block';
    if(bmi >=35){
    alert("อ้วนผิดปกติ")
    document.getElementById("result").innerHTML = "อ้วนผิดปกติ"
    document.getElementById("information").innerHTML = "ข้อแนะนำ  \<br>\<br> เพื่อสุขภาพที่ดีขึ้น คุณต้องปรับเปลี่ยนพฤติกรรมแล้ว ถ้าอยากเปลี่ยนตัวเองให้กลับมามีรูปร่างสมส่วน\<br> โรคร้ายไม่ถามหา ต้องเริ่มใส่ใจเรื่องโภชนาการ และออกกำลังกายแล้ว โภชนาการมีส่วนสำคัญ\<br> ที่จะช่วยให้ลด และควบคุมน้ำหนักได้ดีขึ้น สำหรับคนที่คิดว่าตัวเองกินน้อย กินอาหารปกติแต่ยัง อ้วนมากๆ \<br>ควรเข้ารับคำปรึกษาจากแพทย์ เพื่อรับรักษาภาวะโรคอ้วน หรือถ้าอ้วนจากความเผลอเลอ กินดุ กินเก่ง \<br>ต้องควบคุมการกินอาหารให้ดี เลือกกินอาหารที่ดีมีประโยชน์ต่อร่างกาย ในปริมาณที่เหมาะสม ไม่งด \<br>ไม่อดอาหารมากจนเกินไป เพราะจะทำให้โหย หิวบ่อย และยอมแพ้ไปก่อน อาจลดปริมาณอาหารที่กิน\<br>ในแต่ละวันเล็กน้อยประมาณ 200 - 300 กิโลแคลอรี โดยค่าปริมาณพลังงานจากอาหารที่กินในแต่ละวันเฉลี่ย\<br>ไม่ควรน้อยกว่า 1,000 - 1,200 กิโลแคลอรี หรือต้องไม่น้อยกว่าค่า BMR ของแต่ละคน    เลือกกินให้มากๆ \<br>ลดอาหารหวาน ของหวาน ขนม เครื่องดื่มที่มีน้ำตาล งด หรือหลีกเลี่ยงของทอด อาหารไขมันสูง \<br>อาหารที่มีไขมันอิ่มตัวสูง อาหารแปรรูป เบเกอรี่ ขนมซองต่างๆ และเครื่องดื่มที่มีแอลกอฮอล์ อาหารเค็มจัด \<br>โซเดียมสูง    ไม่กินอาหารตามใจ ไม่กินอาหารแก้เครียด ไม่กินจุบจิบ พยายามเลือกกินอาหารที่มีประโยชน์\<br> ผัก - ผลไม้อ่อนหวาน เลือกข้าว - แป้งที่ขัดสีน้อย ธัญพืช เมล็ดพืช ถั่ว สำหรับเนื้อสัตว์ \<br>เลือกเนื้อสัตว์ส่วนที่มีไขมันต่ำ เนื้อส่วนอก ไข่ไก่ หรือ เนื้อสัตว์ที่ให้ไขมันดีอย่างเนื้อปลา เป็นต้น"
}else if(bmi >=30){
    document.getElementById("result").innerHTML = "อ้วน"
    document.getElementById("information").innerHTML = "ข้อแนะนำ  \<br>\<br>    1. การควบคุมอาหารมีส่วนสำคัญอย่างมาก ที่จะช่วยให้สามารถลดน้ำหนักให้อยู่ในเกณฑ์ปกติได้ \<br>ควรปรับเปลี่ยนพฤติกรรมการกินอาหาร โดยเลือกกินอาหารให้หลากกลาย แต่มีประโยชน์\<br> กำหนดปริมาณการกินที่เหมาะสม ต่อความต้องการพลังงาน ไม่ลด ไม่งด หรือ อดอาหารมากจนเกินไป\<br> ลดพลังงานจากอาหารในแต่ละวันเล็กน้อย ประมาณ 200 - 300 กิโลแคลอรี โดยค่าปริมาณพลังงาน\<br>จากอาหารที่กินในแต่ละวันเฉลี่ยไม่ควรน้อยกว่า 1,000 - 1,200 กิโลแคลอรี หรือไม่น้อยกว่าค่า BMR \<br>ของแต่ละคน ลด หรือหลีกเลี่ยงการกินอาหารที่มีน้ำตาลสูง ขนมหวาน , เครื่องดื่มที่มีรสหวาน ของทอด \<br>อาหารแปรรูป อาหารที่มีไขมันอิ่มตัวสูง และควรควบคุมอาหารที่มีปริมาณโซเดียมสูงด้วย      \<br>  เลือกกินอาหารโดยเน้นที่โภชนาการครบถ้วน เพื่อให้ร่างกายได้สารอาหาร และวิตามินที่มีประโยชน์ เช่น \<br>ข้าว - แป้งขัดสีน้อย ธัญพืช ถั่ว เนื้อสัตว์ไขมันต่ำ อกไก่ ไข่ และเนื้อปลา กินผักและผลไม้อ่อนหวาน \<br>ในสัดส่วนที่พอเหมาะ หรืออย่างน้อย 400 กรัมต่อคนต่อวัน    \<br>\<br>    2. คนที่มีน้ำหนักตัวมาก ก่อนจะเริ่มออกกำลังกาย ควรปรึกษา หรือรับคำแนะนำจากแพทย์ หรือผู้เชี่ยวชาญ \<br>เพื่อประเมินสมรรถภาพร่างกายเสียก่อน เพื่อป้องกันอันตรายที่อาจเกิดขึ้น จากปัญหาสุขภาพ \<br>และร่างกายที่ไม่พร้อม"
}else if(bmi >=25){
    document.getElementById("result").innerHTML = "ท้วม"
    document.getElementById("information").innerHTML = "ข้อแนะนำ \<br>\<br>      1. ต้องเริ่มควบคุม และเลือกกินอาหารให้เหมาะสม ปรับเปลี่ยนพฤติกรรมการกินอาหาร \<br>โดยเน้นเลือกกินอาหารที่ดีมีประโยชน์ ครบ 5 หมู่ กำหนดปริมาณตามความต้องการพลังงานของร่างกาย \<br>หรือลดจากเดิมเล็กน้อย ประมาณ 200-300 กิโลแคลอรี โดยค่าปริมาณพลังงานจากอาหารที่กินในแต่ละวัน\<br>เฉลี่ยไม่ควรน้อยกว่า 1,000 - 1,200 กิโลแคลอรี หรือไม่น้อยกว่าค่า BMR ของแต่ละคน \<br>เพื่อป้องกันการจำกัดอาหารมากจนเกินไป ที่อาจส่งผลให้ร่างกายได้รับสารอาหารไม่เพียงพอ \<br>\<br>2. เคลื่อนไหว และออกกำลังกายแบบแอโรบิคอย่างสม่ำเสมอ เลือกความเข้มข้นปานกลาง \<br>โดยทำอย่างน้อยวันละ 30 - 40 นาที 4 - 5 วัน/สัปดาห์ สำหรับคนที่ไม่เคยออกกำลังกาย \<br>ควรเริ่มด้วยกิจกรรมเบาๆ เช่นการเดิน หรือ วิ่งจ๊อกกิ้ง ปั่นจักรยาน ทำต่อเนื่อง เพื่อให้ร่างกายเกิดความคุ้น\<br> และพัฒนาความแข็งแรงขึ้น แล้วจึงค่อยๆ เพิ่มความเข้มข้นของกิจกรรมขึ้นทีละน้อย    \<br>\<br>3. เสริมการฝึกเวทเทรนนิ่ง เพื่อเพิ่มความแข็งแรง และปริมาณของกล้ามเนื้อ ที่มีส่วนช่วยในการเผาผลาญ\<br> และทำให้ไขมันลดลง สำหรับผู้ที่ไม่เคยฝึกการออกกำลังกายแบบใช้แรงต้าน หรือ เวทเทรนนิ่ง \<br>อาจเริ่มต้นด้วยกิจกรรมแบบบอดี้เวทง่ายๆ โดยใช้แรงต้านจากน้ำหนักตัวเอง เช่นการทำท่า แพลงกิ้ง\<br> สควอช หรือซิทอัพ ก็ได้ หรือหากต้องการใช้ลูกน้ำหนัก หรืออุปกรณ์เสริมแรงต้าน ก็ควรศึกษาหาข้อมูล \<br>หรือรับคำแนะนำจากผู้เชี่ยวชาญ ก่อนลงมือปฏิบัติ เพื่อป้องกันอุบัติเหตุ หรืออันตรายที่อาจเกิดขึ้นจาก\<br>การออกกำลังกายผิดวิธี"
}else if(bmi >=18.5){
    document.getElementById("result").innerHTML = "น้ำหนักปกติ"
    document.getElementById("information").innerHTML = "ข้อแนะนำ \<br> \<br>  1. เลือกกินอาหารให้ได้สัดส่วนพอเหมาะ และเลือกอาหารที่ดี มีประโยชน์ ครบ 5 หมู่ \<br>กำหนดปริมาณอาหารให้เพียงพอต่อความต้องการ การใช้พลังงานของร่างกาย \<br>อาหารกลุ่มคาร์โบไฮเดรตให้เลือกเป็น ข้าว-แป้งขัดสีน้อย ธัญพืช ไม่น้อยกว่า 6 ทัพพี \<br>กินผักหลากหลาย ถั่ว ผลไม้อ่อนหวาน รวมกันไม่น้อยกว่า 400 กรัมต่อวัน เพื่อให้ได้รับสารอาหาร \<br>วิตามิน เกลือแร่อย่างเพียงพอ เกิดความสมดุลด้านโภชนาการ และมีส่วนช่วยให้รักษา \<br>และควบคุมน้ำหนักให้อยู่ในเกณฑ์ได้        \<br>\<br>2. ออกกำลังกาย หรือเคลื่อนไหวร่างกายสม่ำเสมอ เลือกความเข้มข้นของกิจกรรมการออกกำลังกาย\<br> ที่ระดับปานกลาง หรือ ใช้ชีวิตให้กระฉับกระเฉง ลุกเดิน เคลื่อนไหวร่างกายบ่อยๆ \<br>หากรักในการออกกำลังกาย ควรเลือกกิจกรรมที่ชื่นชอบและสนุกสนาน จะช่วยลดความเบื่อหน่าย \<br>ทำได้บ่อย และสม่ำเสมอมากขึ้น นอกจากนี้การออกกำลังกาย มีส่วนช่วยให้สุขภาพร่างกายแข็งแรง \<br>สมบูรณ์ กล้ามเนื้อแข็งแรง มีส่วนช่วยลดความเสี่ยงในการเกิดโรคไม่ติดต่อเรื้อรัง(NCDs) ต่างๆ ได้\<br> ถ้าหากต้องการให้สมรรถภาพร่างกายดีขึ้น ควรเลือกการออกกำลังกายแบบแอโรบิค เช่น เดินเร็วๆ \<br>วิ่งเหยาะ ถีบจักรยานเร็วๆ กระโดดเชือก ว่ายน้ำ หรือเล่นกีฬา โดยทำสม่ำเสมอวันละ 20 - 30 นาที \<br>อย่างน้อย 3 - 4 วัน / สัปดาห์"
}else{
    alert("ผอมผิดปกติ")
    document.getElementById("result").innerHTML = "ผอมผิดปกติ"
    document.getElementById("information").innerHTML = "ข้อแนะนำ \<br> \<br>  1. กรณีกินเยอะแต่ไม่อ้วน ก็ต้องระวังเรื่องคุณภาพของอาหารที่กินเข้าไปด้วย เลือกกินอาหารที่ดี \<br> มีประโยชน์ ลดหวาน มัน เค็ม และหลีกเลี่ยงอาหารที่มีไขมันสูง เพราะอาจเพิ่มความเสี่ยงต่อการเป็น \<br> โรคเบาหวาน ความดันเลือดสูง ไขมันในเลือดสูง หรือผอมลงพุงได้   \<br>\<br> 2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีน เพื่อช่วยในการเสริมสร้างกล้ามเนื้อ \<br>หากต้องการเพิ่มน้ำหนัก ให้ไม่ผอมจนเกินไป ให้เพิ่มปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี \<br>โดยเน้นการกินอาหารที่มีประโยชน์ คาร์โบไฮเดรตเชิงซ้อน และไขมันดี   \<br>\<br> 3. เคลื่อนไหว และออกกำลังกายสม่ำเสมอ ระดับความหนักปานกลาง โดยเลือกกิจกรรมการออกกำลังกาย\<br>ที่ชื่นชอบและสนุกสนาน เพื่อส่งเสริมให้อยากออกกำลังกาย ลดความเบื่อหน่าย เช่น การเต้นเข้าจังหวะ\<br> เดิน วิ่ง ว่ายน้ำ หรือกิจกรรมออกแรง ขยับร่างกายในชีวิตประจำวัน \<br> อย่างการทำงานบ้าน การทำสวน เป็นต้น แนะนำให้ออกกำลังกาย อย่างน้อยวันละ 30 นาที \<br> หรือ ไม่น้อยกว่า 150 นาทีต่อสัปดาห์"
}
}
