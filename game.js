// 题库数据 - 山西工商学院档案知识
const questionBank = {
    laws: [
        { id: 1, question: "《中华人民共和国档案法》是什么时候首次颁布的？", options: ["1987年9月5日", "1996年7月5日", "2008年6月20日", "2020年6月20日"], answer: 0, explanation: "《中华人民共和国档案法》于1987年9月5日第六届全国人民代表大会常务委员会第二十二次会议通过。" },
        { id: 2, question: "新修订的《中华人民共和国档案法》从什么时候开始施行？", options: ["2020年10月1日", "2021年1月1日", "2021年6月1日", "2022年1月1日"], answer: 1, explanation: "新修订的《中华人民共和国档案法》于2020年6月20日修订通过，自2021年1月1日起施行。" },
        { id: 3, question: "根据《档案法》，档案工作应当坚持什么原则？", options: ["集中统一管理", "分散自主管理", "部门独立管理", "个人自行管理"], answer: 0, explanation: "根据《档案法》规定，档案工作应当坚持集中统一管理国家档案，维护档案的完整与安全，便于利用。" },
        { id: 4, question: "档案分为几种保管期限？", options: ["三种：永久、长期、短期", "两种：永久和定期", "四种：永久、长期、短期、临时", "五种：永久、长期、中期、短期、临时"], answer: 1, explanation: "根据档案管理规定，档案的保管期限分为永久和定期两种，定期又分为30年和10年。" },
        { id: 5, question: "定期保管的档案最短保管期限是几年？", options: ["5年", "10年", "15年", "20年"], answer: 1, explanation: "定期保管的档案最短保管期限为10年。" },
        { id: 6, question: "国家档案馆接收档案的最低年限是多少？", options: ["5年", "10年", "15年", "20年"], answer: 1, explanation: "列入国家档案馆接收范围的档案，移交单位应当自档案形成之日起满10年移交国家档案馆。" },
        { id: 7, question: "电子档案的法律效力如何认定？", options: ["与纸质档案具有同等法律效力", "低于纸质档案", "不具有法律效力", "仅用于参考"], answer: 0, explanation: "根据《档案法》，电子档案与纸质档案具有同等法律效力。" },
        { id: 8, question: "档案馆应当建立什么制度来保障档案安全？", options: ["档案安全责任制", "档案借用制度", "档案捐赠制度", "档案展览制度"], answer: 0, explanation: "档案馆应当建立档案安全责任制，明确各级人员的安全责任。" },
        { id: 9, question: "档案整理的基本原则是？", options: ["保持文件之间的有机联系", "按文件大小排序", "按文件颜色分类", "按纸张新旧程度"], answer: 0, explanation: "档案整理的基本原则是保持文件之间的有机联系，便于保管和利用。" },
        { id: 10, question: "档案鉴定的目的是什么？", options: ["确定档案的保存价值", "销毁所有档案", "增加档案数量", "减少档案工作"], answer: 0, explanation: "档案鉴定的目的是科学地判定档案的价值，确定其保存期限。" },
        { id: 11, question: "档案库房的温度应控制在什么范围？", options: ["14-24℃", "0-10℃", "30-40℃", "无所谓"], answer: 0, explanation: "档案库房的温度应控制在14-24℃，相对湿度45%-60%。" },
        { id: 12, question: "档案库房的相对湿度应控制在什么范围？", options: ["45%-60%", "20%-30%", "70%-80%", "无所谓"], answer: 0, explanation: "档案库房的相对湿度应控制在45%-60%。" },
        { id: 13, question: "档案数字化扫描的分辨率一般要求是多少？", options: ["不小于300dpi", "72dpi", "150dpi", "600dpi以上"], answer: 0, explanation: "档案数字化扫描一般要求分辨率不小于300dpi。" },
        { id: 14, question: "档案的凭证作用是由什么特性决定的？", options: ["原始性", "真实性", "完整性", "系统性"], answer: 0, explanation: "档案的凭证作用是由其原始性这一特性决定的。" },
        { id: 15, question: "高校档案机构的设置依据是？", options: ["《高等学校档案管理办法》", "《档案法》", "《教育法》", "《高等教育法》"], answer: 0, explanation: "高校档案机构的设置主要依据《高等学校档案管理办法》。" },
        { id: 16, question: "学生档案的保管期限一般是多久？", options: ["永久保管", "10年", "20年", "5年"], answer: 0, explanation: "学生档案需要永久保管，是个人重要的历史凭证。" },
        { id: 17, question: "档案提供利用的主要方式不包括？", options: ["销毁档案", "借阅", "复制", "咨询"], answer: 0, explanation: "档案提供利用的方式包括借阅、复制、咨询等，不包括销毁档案。" },
        { id: 18, question: "档案价值鉴定的基本原则是？", options: ["从全局出发、历史的观点、发展的观点", "从局部出发", "只看眼前利益", "随意鉴定"], answer: 0, explanation: "档案价值鉴定应坚持从全局出发、用历史的观点和发展的观点进行综合判断。" },
        { id: 19, question: "全宗是指什么？", options: ["一个独立机构形成的档案整体", "一个档案馆", "一个档案盒", "一份档案文件"], answer: 0, explanation: "全宗是指一个独立机构在社会活动中形成的档案整体。" },
        { id: 20, question: "\"兰台\"是指什么？", options: ["汉代档案库房名称", "皇帝的卧室", "图书馆", "学校名称"], answer: 0, explanation: "\"兰台\"是汉代档案库房的名称，后世用'兰台'代指档案工作。" }
    ],
    process: [
        { id: 21, question: "山西工商学院毕业生档案通常包含哪些材料？", options: ["学籍档案、成绩单、奖惩材料", "个人日记", "家庭照片", "旅游纪念品"], answer: 0, explanation: "毕业生档案包含学籍档案、成绩单、奖惩材料、报到证副联等。" },
        { id: 22, question: "毕业生档案的转递方式是什么？", options: ["通过机要通信或专人送达", "学生本人自带", "普通快递邮寄", "电子邮件发送"], answer: 0, explanation: "根据规定，毕业生档案必须通过机要通信或专人送达，严禁个人自带。" },
        { id: 23, question: "毕业生如何查询自己的档案去向？", options: ["通过学校就业指导中心查询", "随意打听", "无法查询", "只能现场查询"], answer: 0, explanation: "毕业生可以通过学校就业指导中心、档案馆或就业信息平台查询档案去向。" },
        { id: 24, question: "档案回原籍的毕业生，档案会转到哪里？", options: ["户籍所在地的人才市场", "家庭住址", "当地派出所", "自行保管"], answer: 0, explanation: "未就业或申请回原籍的毕业生，档案会转到户籍所在地的人才市场。" },
        { id: 25, question: "签定就业协议书的毕业生，档案应该转到哪里？", options: ["签约单位或其上级主管部门", "学校档案馆", "个人手中", "任何地点"], answer: 0, explanation: "已签定就业协议书的毕业生，档案应转到签约单位或其上级主管部门。" },
        { id: 26, question: "升学的毕业生，档案如何处理？", options: ["转入录取学校", "留在原学校", "转回原籍", "自行保管"], answer: 0, explanation: "升学的毕业生，档案应按录取学校要求转入录取学校。" },
        { id: 27, question: "出国留学的毕业生，档案可以存放在哪里？", options: ["教育部留学服务中心或户籍地人才中心", "学校保管", "自行保管", "任何地方"], answer: 0, explanation: "出国留学的毕业生，档案可以存放在教育部留学服务中心或户籍地人才中心。" },
        { id: 28, question: "毕业生档案丢失后应该怎么办？", options: ["向学校申请补办", "置之不理", "重新伪造", "向用人单位道歉"], answer: 0, explanation: "毕业生档案丢失后应向原毕业学校申请补办相关档案材料。" },
        { id: 29, question: "毕业生档案在自己手中多久会成为死档？", options: ["超过2年", "超过10年", "超过1个月", "永远不会"], answer: 0, explanation: "根据规定，档案在个人手中保管超过2年可能会被拒收，成为'死档'。" },
        { id: 30, question: "档案转递需要缴纳费用吗？", options: ["不需要", "需要缴纳高额费用", "需要缴纳少量工本费", "仅限本地免费"], answer: 0, explanation: "正规途径的档案转递不需要缴纳费用，如遇收费要警惕。" },
        { id: 31, question: "什么是报到证？", options: ["毕业生就业报到凭证", "学生证", "身份证", "准考证"], answer: 0, explanation: "报到证是毕业生就业报到的凭证，也是档案转递的重要依据。" },
        { id: 32, question: "拆开的档案袋还能使用吗？", options: ["不能，需要重新密封", "可以正常使用", "不影响任何事情", "只需要签字"], answer: 0, explanation: "私自拆开的档案袋会被视为无效，需要学校或档案管理部门重新密封。" },
        { id: 33, question: "档案内容不完整会有什么影响？", options: ["影响政审、落户等手续办理", "没有任何影响", "只影响考试", "只影响就业"], answer: 0, explanation: "档案内容不完整会影响政审、落户、职称评定、养老办理等多种手续。" },
        { id: 34, question: "学生休学期间档案如何处理？", options: ["继续保存在学校", "转回原籍", "交给学生本人", "转至就业单位"], answer: 0, explanation: "学生休学期间，档案继续保存在学校学籍管理部门。" },
        { id: 35, question: "退学的学生档案如何处理？", options: ["转回学生原籍地", "留在学校永久保存", "交给学生自带", "立即销毁"], answer: 0, explanation: "退学的学生档案应按规定转回学生原籍地。" },
        { id: 36, question: "学生转专业后，档案需要做什么处理？", options: ["更新相关信息", "重新建立档案", "销毁原档案", "不用处理"], answer: 0, explanation: "学生转专业后，学籍档案需要更新专业等相关信息。" },
        { id: 37, question: "档案转递的机要通信是什么？", options: ["由国家专门的机要通信系统转递", "通过快递公司转递", "通过普通邮件转递", "通过学生自带"], answer: 0, explanation: "机要通信是由国家专门的机要通信系统负责的安全保密转递方式。" },
        { id: 38, question: "档案转递一般需要多长时间？", options: ["1-4周左右", "立即到达", "1年以上", "无法确定"], answer: 0, explanation: "档案通过机要通信转递一般需要1-4周左右时间。" },
        { id: 39, question: "学生档案的整理原则是什么？", options: ["真实、完整、规范、安全", "越多越好", "越新越好", "越厚越好"], answer: 0, explanation: "学生档案整理应遵循真实、完整、规范、安全的原则。" },
        { id: 40, question: "人事档案的主要功能不包括？", options: ["娱乐功能", "凭证功能", "参考功能", "联系功能"], answer: 0, explanation: "人事档案具有凭证功能、参考功能和联系功能，不具有娱乐功能。" }
    ],
    history: [
        { id: 41, question: "山西工商学院的前身是什么？", options: ["高等教育自学考试辅导班", "山西工商职业学院", "山西工商联合大学", "太原工商学院"], answer: 0, explanation: "山西工商学院是在创办于1986年的高等教育自学考试辅导班的基础上发展起来的。" },
        { id: 42, question: "山西工商学院是什么时候成立的？", options: ["1986年", "2004年", "2011年", "2000年"], answer: 0, explanation: "山西工商学院的前身高等教育自学考试辅导班创办于1986年。" },
        { id: 43, question: "山西工商学院是什么时候升格为本科院校的？", options: ["2011年4月7日", "2004年", "2000年", "2014年"], answer: 0, explanation: "2011年4月7日，经国家教育部批准，山西工商学院成为山西省第一所民办本科高校。" },
        { id: 44, question: "山西工商学院升格为本科前的名称是什么？", options: ["山西工商职业学院", "山西工商联合大学", "山西工商专修学院", "太原工商职业学院"], answer: 0, explanation: "2004年成立山西工商职业学院（专科），2011年升格为本科院校并更名为山西工商学院。" },
        { id: 45, question: "山西工商学院的校训是什么？", options: ["诚信、奉献、拼搏、争先", "诚信、奉献、拼搏、超越", "自强不息、厚德载物", "博学、慎思、明辨、笃行"], answer: 0, explanation: "山西工商学院的校训是'诚信、奉献、拼搏、争先'。" },
        { id: 46, question: "山西工商学院的校徽主要颜色是什么？", options: ["红色和白色", "蓝色和白色", "绿色和白色", "紫色和金色"], answer: 0, explanation: "山西工商学院校徽以白色和红色为主色彩。" },
        { id: 47, question: "山西工商学院现任董事长、院长是谁？", options: ["牛三平", "容和平", "徐阳生", "陈教兰"], answer: 0, explanation: "山西工商学院现任董事长、院长是牛三平。" },
        { id: 48, question: "山西工商学院的\"三牛\"精神指的是什么？", options: ["拓荒牛、孺子牛、领墒牛", "黄牛、水牛、奶牛", "公牛、母牛、小牛", "金牛、银牛、铜牛"], answer: 0, explanation: "山西工商学院的'三牛'精神指顽强拼搏的拓荒牛精神、敬业奉献的孺子牛精神、争先创新的领墒牛精神。" },
        { id: 49, question: "山西工商学院北格校区什么时候启用？", options: ["2014年10月18日", "2011年4月11日", "2004年9月1日", "2016年10月18日"], answer: 0, explanation: "山西工商学院北格校区于2014年10月18日举行启用仪式。" },
        { id: 50, question: "山西工商学院北格校区位于哪里？", options: ["太原市小店区北格镇", "太原市杏花岭区", "太原市迎泽区", "太原市万柏林区"], answer: 0, explanation: "山西工商学院北格校区位于太原市小店区北格镇。" },
        { id: 51, question: "山西工商学院占地多少亩？", options: ["700多亩", "500亩", "1000亩", "300亩"], answer: 0, explanation: "山西工商学院现占地700多亩。" },
        { id: 52, question: "山西工商学院图书馆藏书量约有多少？", options: ["120万册", "50万册", "200万册", "100万册"], answer: 0, explanation: "山西工商学院图书馆藏书120万册。" },
        { id: 53, question: "山西工商学院设有多少个二级学院？", options: ["16个", "8个", "12个", "15个"], answer: 0, explanation: "山西工商学院设有商学院、会计学院、金融学院等16个二级学院。" },
        { id: 54, question: "山西工商学院在校生人数约为多少？", options: ["15000人", "10000人", "20000人", "8000人"], answer: 0, explanation: "山西工商学院在校生约15000人。" },
        { id: 55, question: "山西工商学院什么时候建起自有校园校舍？", options: ["2000年", "1986年", "2004年", "2011年"], answer: 0, explanation: "2000年，山西工商学院建起了自有校园校舍，结束了多年的租赁办学历史。" },
        { id: 56, question: "山西工商学院的通才教育模式包括哪些内容？", options: ["通识教育+专业教育+综合素质培育+实践体验式教育", "仅专业教育", "仅通识教育", "仅实践教育"], answer: 0, explanation: "通才教育是'通识教育+专业教育+综合素质培育+实践体验式教育'的教育模式。" },
        { id: 57, question: "山西工商学院何时免费接收乌克兰留学生学习汉语？", options: ["2004年", "2011年", "2014年", "2013年"], answer: 0, explanation: "2004年，山西工商学院免费接收乌克兰留学生学习汉语。" },
        { id: 58, question: "山西省高校首次派在校学生去台湾交流学习是哪一年？", options: ["2013年", "2011年", "2014年", "2015年"], answer: 0, explanation: "2013年7月，山西工商学院10名大学生赴台交流学习，这是山西省高校首次派在校学生去台湾交流学习。" },
        { id: 59, question: "山西工商学院北格校区占地面积多少亩？", options: ["406亩", "300亩", "500亩", "200亩"], answer: 0, explanation: "山西工商学院北格校区占地面积406亩。" },
        { id: 60, question: "山西工商学院获得的荣誉称号不包括？", options: ["全国重点大学", "全国民办高校先进单位", "山西省优秀民办高校", "全省职业教育先进单位"], answer: 0, explanation: "山西工商学院获得'全国民办高校先进单位'、'山西省优秀民办高校'等荣誉称号，但不是全国重点大学。" }
    ],
    archives: [
        { id: 61, question: "档案分为几种保管期限？", options: ["两种：永久和定期", "三种：永久、长期、短期", "四种：永久、长期、短期、临时", "五种"], answer: 0, explanation: "根据档案管理规定，档案的保管期限分为永久和定期两种。" },
        { id: 62, question: "电子档案的存储格式通常使用哪种？", options: ["PDF格式", "DOCX格式", "TXT格式", "XLS格式"], answer: 0, explanation: "电子档案长期保存通常使用PDF、TIFF等格式。" },
        { id: 63, question: "预防档案霉变的有效措施是？", options: ["控制温湿度", "增加光照", "提高温度", "减少通风"], answer: 0, explanation: "控制温湿度是预防档案霉变的有效措施。" },
        { id: 64, question: "纸质档案去污的方法不包括？", options: ["用水冲洗", "机械去污", "有机溶剂去污", "氧化去污"], answer: 0, explanation: "纸质档案去污方法包括机械去污、有机溶剂去污、氧化去污等，不能直接用水冲洗。" },
        { id: 65, question: "档号由哪几部分组成？", options: ["全宗号、目录号、案卷号、页（件）号", "仅案卷号", "仅档号", "仅有编号"], answer: 0, explanation: "档号通常由全宗号、目录号、案卷号、页（件）号等组成。" },
        { id: 66, question: "档案分类的常用方法不包括？", options: ["按颜色分类", "按来源分类", "按内容分类", "按年度分类"], answer: 0, explanation: "档案分类的常用方法包括来源分类法、内容分类法、年度分类法等，不按颜色分类。" },
        { id: 67, question: "中国第一历史档案馆主要保存什么时期的档案？", options: ["明清时期", "民国时期", "建国以后", "全部时期"], answer: 0, explanation: "中国第一历史档案馆主要保存明清时期的档案。" },
        { id: 68, question: "中国第二历史档案馆主要保存什么时期的档案？", options: ["民国时期", "明清时期", "建国以后", "古代时期"], answer: 0, explanation: "中国第二历史档案馆主要保存民国时期的档案。" },
        { id: 69, question: "\"档案\"一词最早出现在什么朝代？", options: ["清代", "明代", "唐代", "宋代"], answer: 0, explanation: "\"档案\"一词最早出现在清代，在此之前称为\"典籍\"、\"文书\"等。" },
        { id: 70, question: "档案利用与保密的关系是？", options: ["在保密前提下提供利用", "完全保密不提供利用", "完全开放不保密", "没有关系"], answer: 0, explanation: "档案利用与保密的关系是在做好保密工作的前提下，最大限度地提供利用。" },
        { id: 71, question: "档案修复的基本原则不包括？", options: ["随意修复", "保持原貌", "可逆性", "耐久性"], answer: 0, explanation: "档案修复应遵循保持原貌、可逆性、耐久性等原则，不能随意修复。" },
        { id: 72, question: "档案害虫存活的温度范围是多少？", options: ["8-40℃", "0℃以下", "50℃以上", "无所谓"], answer: 0, explanation: "档案害虫一般在8-40℃温度范围内存活繁殖。" },
        { id: 73, question: "档案著录项目的主要依据是什么？", options: ["档案内容", "档案外形", "档案载体", "档案数量"], answer: 0, explanation: "档案著录主要依据档案内容进行描述和标引。" },
        { id: 74, question: "档号编制的原则不包括？", options: ["随意性", "唯一性", "稳定性", "结构性"], answer: 0, explanation: "档号编制要求具有唯一性、稳定性和结构性，不能随意编制。" },
        { id: 75, question: "\"档子\"这个词汇出现在什么时期的档案中？", options: ["明代", "唐代", "宋代", "清代"], answer: 0, explanation: "\"档子\"这个词出现在明代的档案中，是档案一词的起源之一。" },
        { id: 76, question: "单位和个人利用档案，应当遵守什么规定？", options: ["不得篡改、损毁、伪造档案", "可以随意修改档案内容", "可以将档案带出档案馆", "可以擅自复制档案全文"], answer: 0, explanation: "根据《档案法》规定，利用档案应当遵守不得篡改、损毁、伪造档案的规定。" },
        { id: 77, question: "档案馆提供社会利用档案的方式不包括？", options: ["购买", "查阅", "复制", "摘录"], answer: 0, explanation: "档案馆提供社会利用档案的方式包括查阅、复制和摘录，不包括购买。" },
        { id: 78, question: "档案工作人员应当具备什么基本条件？", options: ["政治素质好", "仅需要专业技术", "年龄限制", "性别限制"], answer: 0, explanation: "档案工作人员应当具备政治素质好、业务能力强，忠于职守、遵纪守法。" },
        { id: 79, question: "根据《档案法》，档案馆应当配置什么设施？", options: ["防盗设施", "仅防火设施", "普通办公室", "娱乐设施"], answer: 0, explanation: "档案馆应当配置必要的设施，确保档案的安全，包括防盗、防火、防潮等设施。" },
        { id: 80, question: "档案数字化建设的主要目标是什么？", options: ["便于保管、利用和共享", "取代纸质档案", "减少档案人员", "降低档案馆数量"], answer: 0, explanation: "档案数字化建设的主要目标是便于档案的保管、利用和共享。" }
    ]
};

// 游戏状态
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let timer = 150;
let timerInterval = null;
let selectedCategory = 'all';
let startTime = 0;

// 每次答题的题目数量
const QUESTIONS_PER_GAME = 25;

// DOM元素
const startPage = document.getElementById('start-page');
const gamePage = document.getElementById('game-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const backToStartBtn = document.getElementById('back-to-start-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const progressFill = document.getElementById('progress-fill');
const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const finalScoreEl = document.getElementById('final-score');
const correctCountEl = document.getElementById('correct-count');
const accuracyEl = document.getElementById('accuracy');
const timeUsedEl = document.getElementById('time-used');
const resultTitle = document.getElementById('result-title');
const resultIcon = document.getElementById('result-icon');
const resultMessage = document.getElementById('result-message');

// 初始化
function init() {
    startBtn.addEventListener('click', startGame);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartGame);
    shareBtn.addEventListener('click', shareScore);
    backToStartBtn.addEventListener('click', backToStart);
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
        });
    });
}

// 开始游戏
function startGame() {
    // 获取题目并随机选取25题
    let allQuestions = getQuestionsByCategory(selectedCategory);
    currentQuestions = shuffleArray(allQuestions).slice(0, QUESTIONS_PER_GAME);
    
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    timer = 150;
    startTime = Date.now();
    
    currentQuestionEl.textContent = '1';
    totalQuestionsEl.textContent = currentQuestions.length;
    scoreEl.textContent = '0';
    timerEl.textContent = '150';
    progressFill.style.width = '0%';
    
    startPage.classList.add('hidden');
    resultPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
    
    loadQuestion();
    startTimer();
}

// 根据分类获取题目
function getQuestionsByCategory(category) {
    let questions = [];
    
    switch(category) {
        case 'laws':
            questions = [...questionBank.laws];
            break;
        case 'process':
            questions = [...questionBank.process];
            break;
        case 'history':
            questions = [...questionBank.history];
            break;
        case 'archives':
            questions = [...questionBank.archives];
            break;
        default:
            questions = [
                ...questionBank.laws,
                ...questionBank.process,
                ...questionBank.history,
                ...questionBank.archives
            ];
            break;
    }
    
    return questions;
}

// 数组随机排序
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 打乱选项顺序并记录正确答案索引
function shuffleOptions(question) {
    const optionObjects = question.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === question.answer
    }));
    
    const shuffledOptions = shuffleArray(optionObjects);
    let newAnswerIndex = shuffledOptions.findIndex(opt => opt.isCorrect);
    
    return {
        options: shuffledOptions.map(opt => opt.text),
        answer: newAnswerIndex
    };
}

// 加载题目
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    if (!question) {
        endGame();
        return;
    }
    
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    const categoryNames = {
        'laws': '📜 档案法律法规',
        'process': '📋 毕业档案流程',
        'history': '🏛️ 校史知识',
        'archives': '📁 档案管理知识',
        'mixed': '📚 综合知识'
    };
    
    questionCategory.textContent = categoryNames[question.category] || '综合知识';
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    
    const shuffledData = shuffleOptions(question);
    const shuffledOptions = shuffledData.options;
    const correctAnswer = shuffledData.answer;
    
    optionsContainer.dataset.correctAnswer = correctAnswer;
    
    shuffledOptions.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.dataset.index = index;
        optionEl.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        optionEl.addEventListener('click', () => selectOption(optionEl, index, correctAnswer));
        optionsContainer.appendChild(optionEl);
    });
    
    nextBtn.classList.add('hidden');
    feedback.classList.remove('show');
}

// 选择选项
function selectOption(optionEl, selectedIndex, correctIndex) {
    if (!nextBtn.classList.contains('hidden')) return;
    
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.add('disabled'));
    
    if (selectedIndex === correctIndex) {
        // 回答正确，自动跳转下一题
        optionEl.classList.add('correct');
        score += 10;
        correctCount++;
        feedback.className = 'feedback correct show';
        feedback.textContent = `🎉 回答正确！+10分！\n${question.explanation}`;
        scoreEl.textContent = score;
        
        feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 延迟1.5秒后自动跳转到下一题
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    } else {
        // 回答错误，标记红色并停留
        optionEl.classList.add('wrong');
        options[correctIndex].classList.add('correct');
        feedback.className = 'feedback wrong show';
        feedback.textContent = `😢 回答错误！\n${question.explanation}`;
        scoreEl.textContent = score;
        nextBtn.classList.remove('hidden');
        
        feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 下一题
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        currentQuestionEl.textContent = currentQuestionIndex + 1;
        loadQuestion();
    } else {
        endGame();
    }
}

// 启动计时器
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timer--;
        timerEl.textContent = timer;
        
        if (timer <= 10) {
            timerEl.style.color = '#e74c3c';
            timerEl.parentElement.classList.add('shake');
        } else {
            timerEl.style.color = '#666';
            timerEl.parentElement.classList.remove('shake');
        }
        
        if (timer <= 0) {
            endGame();
        }
    }, 1000);
}

// 结束游戏
function endGame() {
    clearInterval(timerInterval);
    
    const timeUsed = Math.floor((Date.now() - startTime) / 1000);
    const accuracy = currentQuestions.length > 0 ? 
        Math.round((correctCount / currentQuestions.length) * 100) : 0;
    
    finalScoreEl.textContent = score;
    correctCountEl.textContent = correctCount;
    accuracyEl.textContent = `${accuracy}%`;
    timeUsedEl.textContent = `${timeUsed}秒`;
    
    if (score >= 225) {
        resultIcon.textContent = '🏆';
        resultTitle.textContent = '档案知识大师！';
        resultMessage.textContent = '太厉害了！您对档案知识了如指掌，是当之无愧的档案大师！';
    } else if (score >= 188) {
        resultIcon.textContent = '🥇';
        resultTitle.textContent = '档案知识达人！';
        resultMessage.textContent = '非常优秀！您的档案知识储备相当扎实！';
    } else if (score >= 150) {
        resultIcon.textContent = '🥈';
        resultTitle.textContent = '档案知识能手！';
        resultMessage.textContent = '不错哦！继续努力，您会更上一层楼！';
    } else if (score >= 113) {
        resultIcon.textContent = '🥉';
        resultTitle.textContent = '档案知识学习者！';
        resultMessage.textContent = '还需加油！多学习档案知识，下次一定会更好！';
    } else {
        resultIcon.textContent = '📚';
        resultTitle.textContent = '继续加油！';
        resultMessage.textContent = '别灰心！档案知识很重要，坚持学习就会有进步！';
    }
    
    gamePage.classList.add('hidden');
    resultPage.classList.remove('hidden');
}

// 重新开始
function restartGame() {
    startPage.classList.remove('hidden');
    resultPage.classList.add('hidden');
    timerEl.style.color = '#666';
}

// 返回开始页面
function backToStart() {
    // 停止计时器
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // 显示确认对话框
    const confirmed = confirm('确定要返回开始页面吗？当前游戏进度将不会保存。');
    
    if (confirmed) {
        // 返回开始页面
        gamePage.classList.add('hidden');
        startPage.classList.remove('hidden');
        
        // 重置计时器显示
        timerEl.style.color = '#666';
    }
}

// 分享成绩
function shareScore() {
    const accuracy = currentQuestions.length > 0 ? 
        Math.round((correctCount / currentQuestions.length) * 100) : 0;
    const text = `我在「山西工商学院档案知识闯关」中获得了${score}分！答对了${correctCount}题，正确率${accuracy}%！快来挑战吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '山西工商学院档案知识闯关',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('成绩已复制到剪贴板！');
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);