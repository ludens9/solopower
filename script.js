/* eslint-disable */
// @ts-nocheck
// 전역 변수
let currentQuestion = 0;
let userAnswers = {};
let userInfo = {};

// 완전한 결과 데이터 (JSON 파일 내용을 직접 포함)
const staticResultTypes = {
    "economic_stable_life_stable_relationship_yes_emotion_satisfied": {
        "score": "97",
        "animal": "🐘",
        "title": "당신은 육각형 자취력 소유자 코끼리",
        "analysis": "당신은 기본기가 이미 잘 갖춰져 있습니다. 식사·청소·세탁이 큰 무리 없이 돌아가고, 지출도 계획 안에서 움직입니다. 필요한 때 연락할 사람도 분명해 갑작스런 일에도 당황이 적습니다. 이 상태는 '혼자 살아도 일상이 스스로 굴러가는 단계'로, 작은 변수에 크게 흔들리지 않는 체력을 의미해요.<br><br>다만 안정이 길어질수록 보이지 않는 빈틈이 생깁니다. 자동이체 항목이 묻어 다니거나, 비상 대처 절차를 오래 점검하지 않아 실제 상황에서 기억이 흐릿해질 수 있어요. 관계도 '괜찮다'는 이유로 한동안 방치되면 몸은 편해도 마음의 탄력이 줄어듭니다.<br><br>이미 잘하고 계시니, 지금 필요한 건 더 많은 노력보다 안전핀을 주기화하는 일입니다. 준비가 반복되면 평소의 안정이 위기 때도 그대로 작동합니다. 이 장점을 오래 가져가려면, 이번 주에 안전핀을 하나만 확실히 꽂아 보세요.<br><br>일정에 넣어 두면 생각보다 가볍게 끝납니다. 아래 할일 중 한 가지를 선택해 오늘 바로 '브로콜리 루틴'에 추가해 주세요.",
        "broccoli": [
            "비상연락망 만들기",
            "주기적으로 친구와 가족에게 안부묻기",
            "자동이체 내역 점검하기"
        ]
    },
    "economic_stable_life_stable_relationship_yes_emotion_unsatisfied": {
        "score": "94",
        "animal": "🦚",
        "title": "당신은 완벽한 모범생 공작",
        "analysis": "대체로 모두 안정적이지만, 하루가 끝나면 묘한 허전함이 남습니다. 해야 할 일을 했고 주변도 분주한데, 정작 내 마음이 채워지지 않는 느낌이 반복될 수 있어요. 이때 흔한 오해는 “내가 아직 부족해서”입니다.<br><br>그러나 당신의 결과는 능력의 문제가 아니라 의미감의 밀도가 낮다는 신호에 가깝습니다. 해결은 거창한 변화가 아니라 ‘깊이’를 살짝 올리는 데서 시작합니다. 가까운 사람과의 대화가 정보 교환을 넘어 감정·가치·최근의 중요 사건을 다루면 만족감이 빠르게 회복돼요. 하루 3줄 기록은 ‘무슨 일이 있었나’를 넘어 ‘나에게 왜 중요했나’를 붙이면서 스스로의 기준을 또렷하게 만듭니다. 또한 오래 이어갈 활동(취미·봉사·스터디)을 달력에 고정하면 내가 사는 이유가 생활의 리듬 속에 스며듭니다.<br><br>이미 기반은 충분합니다. 오늘은 내 일상에 의미를 한 숟가락 더하는 약속을 정해 주세요. 아래 할일 중 한 가지를 지금 '브로콜리 루틴'으로 만들어 보세요.",
        "broccoli": [
            "이번 주 나에 대해 생각해보기",
            "세줄기록(잘한일/고마운일/중요한일)",
            "이번 주 취미나 봉사 참여하기"
        ]
    },
    "economic_stable_life_stable_relationship_no_emotion_satisfied": {
        "score": "91",
        "animal": "🐯",
        "title": "당신은 독립생활 우등생 호랑이",
        "analysis": "당신은 모든걸 안정적으로 관리합니다. 집 안 일도 제때 처리하고, 필요한 자원을 미리 준비해 두는 습관 덕에 변수가 와도 침착하게 대응하죠. 당신의 강점은 자율성과 몰입입니다. 혼자 있어도 삶이 잘 굴러가고, 스스로의 리듬을 존중할 때 만족감이 높습니다.<br><br>다만 관계의 얇음은 위기 시 취약점이 됩니다. 도움을 청할 상대가 떠오르지 않으면, 작은 사건도 오래 짐이 되곤 합니다. 관계를 크게 확장할 필요는 없습니다. 당신의 리듬을 해치지 않는 얕은 연결만 주기적으로 유지해도 충분해요. 인사 한 줄, 소규모 행사 한 번, 비상연락 한 명의 생사 확인 같은 아주 작고 가벼운 접점이 실제 상황에서 놀라운 힘을 발휘합니다.<br><br>지금의 단단함 위에 연결의 안전핀을 하나만 얹어 보세요. 아래 할일 중 한 가지를 ‘브로콜리 루틴’에 넣어 실천해 주세요.",
        "broccoli": [
            "SNS라도 짧게 소통하기",
            "지인들과 근황토크하기",
            "동네의 작은 행사·모임 참여하기"
        ]
    },
    "economic_stable_life_stable_relationship_no_emotion_unsatisfied": {
        "score": "88",
        "animal": "🦅",
        "title": "당신은 능력많은 독수리",
        "analysis": "생활과 재정은 스스로 깔끔히 관리하지만, 마음의 자리엔 고요가 길게 남는 패턴입니다. 도움을 청하기보다 혼자 감당하는 습관이 있어 표면은 안정적이지만, 속으로는 피로가 누적되기 쉬워요. 자립은 탄탄하지만 정서적 회복 루프가 약한 상태를 드러냅니다.<br><br>필요한 건 관계의 양을 늘리는 게 아니라, 짧고 규칙적인 연결을 도입하는 것입니다. 10분 통화 한 번, 산책 중 음성 메시지 한 개, 관심 모임에 가볍게 얼굴 비추기만으로도 고립의 벽은 금세 낮아집니다. 정서가 가벼워지면, 이미 잘 굴러가는 루틴은 한층 더 수월하게 이어집니다. 도움을 청하는 순간을 ‘약함’으로 여기지 말고 ‘유지보수’로 생각해 보세요. 당신의 자립은 그대로이고, 마음만 훨씬 편해집니다.<br><br>오늘 단 하나의 연결을 예약해 보세요. 아래 할일 중 한 가지를 지금 ‘브로콜리 루틴’에 넣어 주시겠어요?",
        "broccoli": [
            "지인들과 근황토크하기",
            "관심 소모임 찾아보기",
            "지속가능한 모임 참여하기"
        ]
    },
    "economic_stable_life_unstable_relationship_yes_emotion_satisfied": {
        "score": "85",
        "animal": "🦝",
        "title": "당신은 자취력 고득점자 너구리",
        "analysis": "당신은 재정 관리에서는 큰 흔들림이 없습니다. 지출과 저축의 흐름을 기본적으로 잡아두었기에 금전적 불안은 크지 않아요. 또한 관계도 일정하게 유지되며, 주변 사람들과 교류가 있어 정서적으로 안정감을 얻습니다.<br><br>하지만 생활 패턴에서 불안정이 반복되는 모습이 보입니다. 집안일이 몰려 있거나 식사를 제때 챙기지 못하는 등, 기본 루틴이 자주 흔들려요. 이 불안정은 기분이 나빠서가 아니라 구조가 약하기 때문에 생기는 자연스러운 결과입니다. 이미 경제와 관계는 버팀목이 있으니, 생활에서 작은 구조만 세워 주면 전체 균형은 금세 회복됩니다. 생활의 질을 크게 바꾸는 건 거창한 계획이 아니라, 반복되는 소소한 리듬입니다. 정해진 요일에 집안일을 끊어두고, 식사 준비를 단순화하는 것만으로도 만족감은 꾸준히 이어집니다. 당신의 생활은 이미 튼튼한 기반 위에 있습니다.<br><br>지금 필요한 건 생활 루틴의 고정핀 하나입니다. 이번 주 아래 할일 중 한 가지를 반드시 ‘브로콜리 루틴’으로 실행해 보세요.",
        "broccoli": [
            "지난주 지출점검하고 기록하기",
            "가계부 쓰고 소비예산 정하기",
            "집안일 스케쥴 고정하기"
        ]
    },
    "economic_stable_life_unstable_relationship_yes_emotion_unsatisfied": {
        "score": "82",
        "animal": "🦫",
        "title": "당신은 책임감 높은 비버",
        "analysis": "당신은 재정과 관계라는 두 축은 잘 유지하고 있습니다. 큰 지출에서 실수하지 않고, 주변과도 적절히 연결돼 있어 완전히 고립되진 않아요.<br><br>그러나 생활 관리가 불안정하고 정서적 만족도가 낮아, 바쁜 와중에 마음이 지치고 루틴이 쉽게 무너집니다. 이런 사람은 '할 일은 해내지만, 생활 바닥이 자주 무너지고 만족은 남지 않는 상태'를 뜻합니다. 핵심은 더 열심히가 아니라 넘기지 않는 최소 루틴을 만드는 것입니다. 바쁜 날에도 지켜질 수 있는 단순한 습관이 정서를 안정시키고, 생활의 무게를 덜어 줍니다.<br><br>또한 관계는 이미 있으니, 그 관계를 활용해 정서적 환기를 주기적으로 만드는 것이 좋습니다. 당신은 이미 실행력이 있는 사람입니다. 그 힘이 생활과 정서를 잡아주려면, 작은 루틴과 짧은 교류가 반드시 필요합니다.<br><br>오늘 아래 할일 중 하나를 정해 ‘브로콜리 루틴’에 넣어 보세요. 당신의 생활은 훨씬 가볍고 안정적으로 변할 것입니다.",
        "broccoli": [
            "취침 알람(스크린 오프·조명 낮추기)",
            "나를 케어하는 루틴 만들기(요가/확언/밥먹기 등)",
            "친구들과 일함께하기(산책, 시장보기 등)"
        ]
    },
    "economic_stable_life_unstable_relationship_no_emotion_satisfied": {
        "score": "79",
        "animal": "🐱",
        "title": "당신은 자유로운 우등생 고양이",
        "analysis": "경제적으로는 큰 어려움이 없고, 혼자만의 생활에서도 만족을 느끼는 모습이 보입니다.<br><br>그러나 생활 관리가 일정하지 않고, 관계망이 거의 없어 혼자서 생활을 이어가고 있습니다. 이런 유형은 ‘자유롭게 만족하며 살지만, 생활 루틴은 쉽게 흐트러지는 상태’를 뜻합니다.<br><br>당신은 자유로움이 장점이지만, 장기적으로는 생활의 기본 틀이 약해질 위험이 있습니다. 혼자만의 시간을 즐기더라도, 식사·청소·세탁 같은 기본 루틴은 단단히 잡아줄 필요가 있어요. 관계가 반드시 많을 필요는 없지만, 최소한의 연결이 없으면 돌발 상황에서 취약해집니다. 자율성을 해치지 않으면서도 가드레일을 세우는 것이 핵심입니다. 당신의 자유는 그대로 지켜야 합니다. 다만 작은 루틴과 얕은 연결을 만들어 두면, 지금의 만족이 더 오래 유지될 수 있습니다.<br><br>이번 주 아래 할일 중 한 가지를 ‘브로콜리 루틴’에 넣고 반드시 실행해 보세요.",
        "broccoli": [
            "지인에게 안부 묻기",
            "눈에 보이는 곳에 할일 적어두기",
            "쉬운 루틴 만들고 실천하기"
        ]
    },
    "economic_stable_life_unstable_relationship_no_emotion_unsatisfied": {
        "score": "76",
        "animal": "🦉",
        "title": "당신은 똑똑하고 착실한 올빼미",
        "analysis": "당신은 경제적 기반은 안정적입니다. 큰돈에서 실수하거나 지출이 새는 경우는 드물어 금전적 불안은 없습니다.<br><br>그러나 생활 관리가 불안정하고, 관계가 거의 없으며, 정서적 만족도가 낮습니다. 이런 유형은 '경제는 안정되었지만 나머지 영역이 모두 불안정한 상태'를 보여 줍니다.<br><br>생활 루틴이 들쑥날쑥하면 기초 체력이 빠르게 소진되고, 정서적 지지가 없어 외로움과 피곤이 쌓입니다. 이 유형에게 필요한 건 큰 변화가 아니라, 앵커가 되는 작은 습관입니다. 매일 짧은 생활 리셋, 주 1회 교류, 주간 준비를 고정하는 것만으로도 삶은 안정적으로 돌아옵니다.<br><br>당신은 이미 경제적 기반을 지니고 있으니, 다른 영역을 회복하는 데 그 힘을 활용하면 됩니다. 지금 필요한 것은 단 하나의 선택입니다. 오늘 아래 할일 중 한 가지를 바로 '브로콜리 루틴'에 넣어 실행해 보세요. 그 순간이 생활과 정서를 동시에 가볍게 바꿔줄 것입니다.",
        "broccoli": [
            "퇴근후 10분 리셋(설거지/정리/세탁 중 1개)",
            "지인 1명과 메시지 또는 15분 통화",
            "다음 주 계획 미리 세우기"
        ]
    },
    "economic_unstable_life_stable_relationship_yes_emotion_satisfied": {
        "score": "73",
        "animal": "🐒",
        "title": "당신은 사회생활 만랩 원숭이",
        "analysis": "당신은 생활의 기본은 안정적으로 잘 유지하고 있습니다. 집안일과 식사가 큰 흔들림 없이 이어지고, 주변 사람들과의 관계도 원만하여 정서적으로는 지지를 받습니다.<br><br>하지만 경제적 기반이 불안정한 유형으로 드러납니다. 지출이 늘어나거나 수입과 지출의 균형이 자주 깨지는 상황일 수 있어요. 이 유형은 ‘관계와 생활은 안정적이지만, 경제적 불안정이 발목을 잡는 상태’를 보여 줍니다. 다행히 관계와 정서가 안정적이므로, 돈 문제를 홀로 짊어지지 않고 주변의 힘을 빌려 개선할 수 있습니다.<br><br>예산을 단순화하고, 고정비를 먼저 줄이는 것만으로도 체감 안정은 크게 올라갑니다. 생활력이 안정돼 있다는 것은, 경제만 정리하면 전체 균형이 빠르게 돌아올 수 있다는 뜻입니다. 오늘은 재정에 작은 질서를 세우는 것으로 시작해 보세요. 아래 할일 중 하나를 선택해 ‘브로콜리 루틴’에 넣어 이번 주에 꼭 실천해 보시길 바랍니다.",
        "broccoli": [
            "지출을 필수/재미/저축 세 가지로 구분해 기록",
            "다음 모임 지출예산 만들기",
            "고정비(통신·구독·보험) 1항목 줄이기 검토"
        ]
    },
    "economic_unstable_life_stable_relationship_yes_emotion_unsatisfied": {
        "score": "70",
        "animal": "🐑",
        "title": "당신은 안정 추구 우수상 양",
        "analysis": "생활의 뼈대는 안정적으로 유지되고 있습니다. 집안일과 식사가 무너지지 않아 혼자 사는 데 큰 어려움은 없어요. 또한 관계가 이어지고 있어 완전히 고립되지는 않습니다.<br><br>하지만 경제적 불안정과 낮은 정서 만족이 반복적으로 나타납니다. 이 유형은 “기본은 잘 유지되지만, 돈과 마음에서 에너지가 새고 있는 상태”를 뜻합니다. 경제적 불안정은 지출 관리의 허점에서 비롯될 가능성이 높습니다. 정서적 불만족은 생활의 단조로움과 동기 부족에서 오기도 합니다. 따라서 작은 목표와 기록을 통해 다시 통제감을 회복하는 것이 핵심입니다.<br><br>생활의 기본이 안정적인 만큼, 경제와 정서를 조금만 보완하면 전체 균형은 쉽게 회복됩니다. 오늘은 아래 할일에서 ‘브로콜리 루틴’을 만들고, 경제의 흐름을 눈에 보이게 하는 습관을 하나 정해 보세요.",
        "broccoli": [
            "쉬운 루틴 3개 만들기",
            "매일 기분·에너지 5점 기록(2일연속으로 낮으면 친구에게 공유)",
            "동네에서 작게 추가 수익 만들기"
        ]
    },
    "economic_unstable_life_stable_relationship_no_emotion_satisfied": {
        "score": "67",
        "animal": "🦔",
        "title": "당신은 소박하고 안정적인 고슴도치",
        "analysis": "당신은 소박한 생활을 즐기며, 집안일과 식사 같은 생활 기본을 잘 챙깁니다. 정서적으로도 혼자 있는 시간에서 만족을 찾는 능력이 있습니다.<br><br>그러나 경제적 불안정이 눈에 띄고, 관계망이 거의 없는 상태라 위기 시 취약할 수 있습니다. 이 유형은 ‘혼자서는 안정적이지만, 돈과 관계에서 약점이 있는 상태’를 의미합니다. 소비를 관리하지 않으면 불안이 커지고, 관계망이 없으면 작은 위기도 크게 느껴질 수 있습니다. 다행히 생활과 정서는 안정적이므로, 경제와 관계를 보완하는 데 힘을 쓸 여력이 있습니다. 비상금 계좌를 만들어 자동이체를 걸어두고, 가볍게라도 외부 접점을 마련해 두는 것이 필요합니다.<br><br>오늘은 아래 할일을 ‘브로콜리 루틴’으로 만들고 실행해 작은 안전망을 덧대어 보세요.",
        "broccoli": [
            "비상금 통장 자동이체 확인",
            "통신·구독·보험 등 고정비 점검",
            "SNS라도 짧게라도 소통하기"
        ]
    },
    "economic_unstable_life_stable_relationship_no_emotion_unsatisfied": {
        "score": "64",
        "animal": "🦡",
        "title": "당신은 생활집중력이 높은 두더지",
        "analysis": "생활의 기본은 안정돼 있습니다. 집안일과 식사가 유지돼 혼자 지내는 데 큰 문제는 없습니다.<br><br>그러나 경제적 불안정과 관계 단절, 정서적 불만족이 동시에 나타납니다. 이 유형은 ‘기본은 돌아가지만, 마음과 돈의 무게가 점점 커지는 상태’를 보여 줍니다. 혼자서 묵묵히 생활을 이어가지만, 관계가 얕아 고립이 길어지고, 지출 관리가 허술해 불안이 쌓이는 모습입니다. 이 유형에게는 돈의 흐름을 단순히 정리하고, 얕은 연결을 주기적으로 만들어 주는 것이 필요합니다. 정서적 무거움은 작은 성공과 교류에서부터 회복됩니다.<br><br>당신은 이미 생활의 기반을 가지고 있습니다. 이 기반을 오래 지키려면, 돈과 관계에서 최소한의 안전핀을 꽂아야 합니다. 오늘은 아래 할일 중 하나를 선택해 ‘브로콜리 루틴’으로 만들고 실천해 보세요.",
        "broccoli": [
            "고정비 목록 확인·자동이체 점검",
            "지인과 30분 산책/카페 타임",
            "지인들과 근황토크"
        ]
    },
    "economic_unstable_life_unstable_relationship_yes_emotion_satisfied": {
        "score": "61",
        "animal": "🐶",
        "title": "당신은 혼자보다 여럿이 좋은 강아지",
        "analysis": "당신은 혼자 힘으로 생활을 이어가기에는 아직 버거움이 있습니다. 경제적으로 여유가 크지 않고, 집안일이나 식사 관리에서도 흔들림이 보입니다.<br><br>그러나 다행히도 주변의 관계망은 유지되고 있고, 정서적으로는 지지를 받아 만족도가 비교적 높은 편입니다. 즉, ‘혼자서는 부족하지만, 관계가 생활을 떠받쳐 주는 상태’라 할 수 있습니다. 이 유형에서 가장 중요한 점은 이미 가진 관계의 힘을 생활에 연결하는 것입니다. 당신은 혼자서 시작이 어려워도, 누군가와 함께하면 실행력이 크게 올라갑니다. 따라서 생활 루틴을 혼자 책임지려 하기보다, 친구·동료와 약속을 만들어 확인하고 격려를 주고받는 방식이 효과적입니다. 또한 경제적으로는 분리 계좌를 통해 저축을 자동화하면 작은 금액이라도 누적되며 안정감을 줄 수 있습니다. 혼자서는 버거울 수 있지만, 함께하면 충분히 해낼 수 있습니다.<br><br>오늘은 할일 중 하나를 선택해 ‘브로콜리 루틴’을 만들고 주변의 힘을 생활에 연결해 보세요.",
        "broccoli": [
            "친구와 루틴 챌린지 시작하기",
            "퇴근후 5분 살림(설거지, 세탁중 1개완료)",
            "가계부 작성하기"
        ]
    },
    "economic_unstable_life_unstable_relationship_yes_emotion_unsatisfied": {
        "score": "58",
        "animal": "🐥",
        "title": "당신은 작고 귀여운 병아리",
        "analysis": "당신은 경제와 생활 모두 안정적이지 못하고, 정서적으로도 만족도가 낮습니다. 다만 주변과의 관계는 유지되고 있어 완전히 고립된 상태는 아닙니다. 이는 ‘생활의 기반은 아직 잡히지 않았지만, 관계망이 남아 있어 다시 일어설 여지가 있는 상태’라 할 수 있습니다. 생활력이 약한 시기에는 무엇부터 해야 할지 몰라 우왕좌왕할 수 있습니다.<br><br>그러나 중요한 것은 한 번에 모든 것을 바꾸려 하지 않는 것입니다. 가장 기본이 되는 주간 가사 루틴과 간단한 가계부 기록, 그리고 관계를 통한 구체적인 도움 요청을 시작점으로 삼으면 생활은 빠르게 안정됩니다.<br><br>작은 성공 경험이 쌓일수록 자신감은 회복되고, 정서적 무거움도 줄어듭니다. 당신은 아직 시작 단계에 있지만, 지금이 바로 기반을 세울 기회입니다. 오늘 아래 할일 중 하나를 골라 ‘브로콜리 루틴’으로 만들고 꼭 실행해 보세요.",
        "broccoli": [
            "주간 가사 체크(세탁·청소·쓰레기) 작성",
            "친구와 확언, 감사일기 등 챌린지 함께하기",
            "가계부 작성하기"
        ]
    },
    "economic_unstable_life_unstable_relationship_no_emotion_satisfied": {
        "score": "55",
        "animal": "🐇",
        "title": "당신은 밝은 에너지의 토끼",
        "analysis": "당신은 혼자 사는 생활 속에서도 즐거움을 잘 발견하고, 새로운 시도를 두려워하지 않는 긍정적인 면이 돋보입니다. 하지만 생활의 뼈대가 아직 약한 편입니다. 집안일과 지출 관리가 계획보다는 즉흥적으로 움직이고, 기분에 따라 들쑥날쑥한 흐름이 나타납니다. 당신에게 중요한 건 자유를 줄이는 것이 아니라, 자유를 더 오래 유지하게 해줄 안전장치를 마련하는 것입니다.<br><br>아침마다 정해진 루틴을 만들면 하루를 시작하는 안정감이 생기고, 장보기에서 기본 재료만 확보해도 식사 걱정이 줄어듭니다. 또한 모임 전 지출 상한을 미리 정해 두면, 즐거움을 망치지 않으면서도 생활의 균형을 유지할 수 있습니다.<br><br>당신은 이미 밝고 긍정적인 에너지를 가지고 있습니다. 이 힘이 단발성으로 끝나지 않고 꾸준히 이어지게 하려면 단순하고 반복 가능한 규칙이 필요합니다. 작은 규칙 하나가 생활을 붙잡아 주면, 당신이 가진 즐거움은 더 오래 반짝일 거예요. 아래 할일을 '브로콜리 루틴'으로 만들어 좋은 습관을 시작하세요. ",
        "broccoli": [
            "확언, 감사일기 챌린지",
            "쉬운 루틴 만들기",
            "가계부 작성하기"
        ]
    },
    "economic_unstable_life_unstable_relationship_no_emotion_unsatisfied": {
        "score": "52",
        "animal": "🐹",
        "title": "당신은 발전가능성이 높은 햄스터",
        "analysis": "당신은 혼자 지내며 기본 생활을 유지하는 데 아직은 버거움을 느끼고 있습니다. 식사를 챙기는 일, 청소와 세탁, 지출 관리 같은 작은 단위의 일들이 쉽게 밀리거나 흐트러지고, 한 번 무너지면 다시 붙잡기가 더 힘들어집니다. 작은 변수에도 생활이 크게 흔들린다는 점이 특징적입니다.<br><br>하지만 여기서 중요한 점은, 당신이 생활을 완전히 놓는 사람이라는 뜻이 아니라는 것입니다. 작고 분명한 버팀목만 몇 개 있으면 생활이 금세 다시 제 궤도에 올라온다는 의미예요. 예를 들어, 요일을 지정해 가사 중 하나만 확실히 처리하는 습관을 붙이면 '다시 시작할 힘'을 얻을 수 있습니다. 또한 도움을 요청할 수 있는 창구를 마련해 두면, 모든 짐을 혼자 짊어지지 않아도 된다는 안도감이 생활의 무게를 줄여 줍니다.<br><br>그러니 지금의 과제는 완벽한 생활을 꾸리는 것이 아닙니다. 당신에게 필요한 것은 오늘 가능한 가장 작은 단위를 선택해 꾸준히 실행하는 것, 그것뿐입니다. 이 작은 행동이 쌓이면 혼자서도 충분히 잘 살아갈 수 있다는 자신감을 되찾게 될 거예요. 아래 할일을 '브로콜리 루틴'으로 만들어 바로 시작하세요.",
        "broccoli": [
            "아침에 일어나서 긍정확언 외치기",
            "침구정리, 옷정리, 방정리 등 간단한 정리부터 시작하기",
            "동네 복지/상담/의료 창구 한 곳 문의"
        ]
    }
};

// 질문 데이터 (MD 파일에서 동적으로 로드됨)
let questions = [
    {
        question: "오늘은 월급날!",
        orderText: "이제 첫번째 질문 (1/8)",
        options: [
            { text: "[움직이는 가계부 타입]<br>부모님10, 공과금25... 확실하게 알고있음", value: "economic_stable", image: "1-1.png" },
            { text: "[쓰고나서 놀라는 타입]<br>아낀다고 아꼈는데... 모두 어디로 간거지?!", value: "economic_unstable", image: "1-2.png" }
        ]
    },
    {
        question: "갖고 싶은게 생겼어?",
        orderText: "이건 두번째 질문 (2/8)",
        options: [
            { text: "[몇일 고민하는 타입]<br>살까?말까? 이런 내가 가끔은 지치는 것 같아", value: "economic_stable", image: "2-1.png" },
            { text: "[우선 결제하는 타입]<br>어차피 환불하면 되자나! 난 똑똑한 소비자!", value: "economic_unstable", image: "2-2.png" }
        ]
    },
    {
        question: "혼밥메뉴는?",
        orderText: "드디어 세번째 질문 (3/8)",
        options: [
            { text: "[오늘은 내가 요리사 타입]<br>인생 최대 고민! 혼자 먹어도 잘먹는게 제일 중요!", value: "life_stable", image: "3-1.png" },
            { text: "[끼는 때우는게 최고 타입]<br>혼자먹으니까 대충~ 가깝거나 편리한데가 최고!", value: "life_unstable", image: "3-2.png" }
        ]
    },
    {
        question: "집안일은?",
        orderText: "벌써 네번째 질문 (4/8)",
        options: [
            { text: "[눈에 보이는 즉시 타입]<br>눈에 보이면 그냥은 못넘어가! 혹시 결벽증?", value: "life_stable", image: "4-1.png" },
            { text: "[지저분 해지면 하는 타입]<br>몰아서해야 효율적, 대청소를 선호하는 편", value: "life_unstable", image: "4-2.png" }
        ]
    },
    {
        question: "주말에 심심하면?",
        orderText: "다시 다섯번째 질문 (5/8)",
        options: [
            { text: "[친구만나는 타입]<br>친구들한테 연락부터! 시간되면 약속잡고 만나!", value: "relationship_yes", image: "5-1.png" },
            { text: "[집에서 즐기는 타입]<br>혼자서 할게 얼마나 많은데! 심심할틈 없음!", value: "relationship_no", image: "5-2.png" }
        ]
    },
    {
        question: "약속생겼어?",
        orderText: "벌써 여섯번째 질문 (6/8)",
        options: [
            { text: "[전날부터 설레는 타입]<br>뭐입지? 뭐먹지? 자기전까지 즐거워", value: "relationship_yes", image: "6-1.png" },
            { text: "[전날부터 걱정인형 타입]<br>비가와서 약속이 취소되면 좋겠어 ㅠㅠ", value: "relationship_no", image: "6-2.png" }
        ]
    },
    {
        question: "퇴근 길이야?",
        orderText: "드디어 일곱번째 질문 (7/8)",
        options: [
            { text: "[빨리 집에가야지 타입]<br>으쌰! 오늘 하루 알찼어! 어서 들어가서 목욕해야지~", value: "emotion_satisfied", image: "7-1.png" },
            { text: "[집가기 싫어 타입]<br>하루종일 열심히했는데...집에 가면 공허해진달까?", value: "emotion_unsatisfied", image: "7-2.png" }
        ]
    },
    {
        question: "그래도 혼자사니까!",
        orderText: "마지막 여덟번째 질문 (8/8)",
        options: [
            { text: "[생각보다 할만해 타입]<br>진짜로 힘들고 바쁘고 정신없는데! 생각보다 즐거워", value: "emotion_satisfied", image: "8-1.png" },
            { text: "[생각보다 쓸쓸해 타입]<br>정말 자유롭고 생활은 편한데! 생각보다 더 쓸쓸하달까?", value: "emotion_unsatisfied", image: "8-2.png" }
        ]
    }
];

// 결과 데이터 (정적 데이터 사용)
let resultTypes = {};

// 화면 전환 함수
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    // 결과 화면일 때 하단 스크롤 박스 표시
    const scrollContainer = document.querySelector('.bottom-scroll-container');
    if (scrollContainer) {
        if (screenId === 'result-screen') {
            scrollContainer.style.display = 'block';
        } else {
            scrollContainer.style.display = 'none';
        }
    }
}

// 테스트 시작
function startTest() {
    currentQuestion = 0;
    showQuestion();
    showScreen('questions-screen');
}

// 뒤로가기
function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    } else {
        showScreen('main-screen');
    }
}

// 홈으로
function goHome() {
    showScreen('main-screen');
}

// 모바일/터치 디바이스 감지
function isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
}

// 이미지 호버 및 터치 효과 설정
function setupImageHoverEffects() {
    const optionCards = document.querySelectorAll('.option-card');
    
    optionCards.forEach(card => {
        const img = card.querySelector('.option-image');
        if (!img || !img.dataset.hoverSrc || !img.dataset.originalSrc) return;
        
        // 기존 이벤트 리스너 제거 (중복 방지)
        card.removeEventListener('mouseenter', card._hoverEnter);
        card.removeEventListener('mouseleave', card._hoverLeave);
        
        if (isTouchDevice()) {
            // 모바일: 터치 인터랙션 설정
            setupMobileTouchInteraction(card, img);
        } else {
            // 데스크탑: 호버 인터랙션 설정
            setupDesktopHoverInteraction(card, img);
        }
    });
}

// 데스크탑 호버 인터랙션 설정
function setupDesktopHoverInteraction(card, img) {
    // 호버 효과 함수
    card._hoverEnter = () => {
        if (img.dataset.hoverSrc && img.dataset.hoverSrc !== img.src) {
            img.src = img.dataset.hoverSrc;
            img.style.transform = 'scale(1.05)';
        }
    };
    
    card._hoverLeave = () => {
        if (img.dataset.originalSrc && img.dataset.originalSrc !== img.src) {
            img.src = img.dataset.originalSrc;
            img.style.transform = 'scale(1)';
        }
    };
    
    card.addEventListener('mouseenter', card._hoverEnter);
    card.addEventListener('mouseleave', card._hoverLeave);
    
    // 현재 이미 호버 상태라면 즉시 호버 효과 적용
    if (card.matches(':hover')) {
        card._hoverEnter();
    }
}

// 모바일 터치 인터랙션 설정 (새로 구현)
function setupMobileTouchInteraction(card, img) {
    // 카드의 기본 클릭 이벤트 비활성화
    card.onclick = null;
    card.style.pointerEvents = 'none';
    img.style.pointerEvents = 'auto';
    
    // 기존 터치 이벤트 제거
    img.removeEventListener('touchend', img._mobileTouchEnd);
    
    // 새로운 터치 릴리즈 이벤트
    img._mobileTouchEnd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // 릴리즈 즉시 스케일링 + 컬러 변경
        img.style.transition = 'all 0.3s ease';
        img.src = img.dataset.hoverSrc;
        img.style.transform = 'scale(1.05)';
        
        // 0.5초 후 다음 질문으로 이동
        setTimeout(() => {
            const options = card.parentElement.querySelectorAll('.option-card');
            const side = card === options[0] ? 'left' : 'right';
            selectOption(side);
        }, 500);
    };
    
    img.addEventListener('touchend', img._mobileTouchEnd, { passive: false });
}

// 이미지 영역 리셋 함수
function resetImageAreas() {
    if (!isTouchDevice()) return;
    
    const optionImages = document.querySelectorAll('.option-image');
    optionImages.forEach(img => {
        if (img.dataset.originalSrc) {
            img.style.transition = 'none';
            img.src = img.dataset.originalSrc;
            img.style.transform = 'scale(1)';
        }
    });
}


// 질문 표시
function showQuestion() {
    // 이미지 영역 리셋 (모바일에서 이전 상태 초기화)
    resetImageAreas();
    
    // MD 파일에서 로드된 데이터가 있으면 사용, 없으면 기본 데이터 사용
    const questionData = window.questions && window.questions.length > 0 ? window.questions : questions;
    const question = questionData[currentQuestion];
    
    // 질문 순서 텍스트 업데이트
    document.getElementById('questionNumber').textContent = question.orderText;
    
    // 질문 타이틀 업데이트
    document.getElementById('questionTitle').textContent = question.question;
    
    // 옵션 이미지와 텍스트 업데이트
    const img1 = document.getElementById('optionImage1');
    const img2 = document.getElementById('optionImage2');
    
    img1.src = `images/${question.options[0].image}`;
    img1.dataset.originalSrc = `images/${question.options[0].image}`;
    img1.dataset.hoverSrc = `images/${question.options[0].image.replace('.png', '_color.png')}`;
    
    img2.src = `images/${question.options[1].image}`;
    img2.dataset.originalSrc = `images/${question.options[1].image}`;
    img2.dataset.hoverSrc = `images/${question.options[1].image.replace('.png', '_color.png')}`;
    
    document.getElementById('optionText1').innerHTML = question.options[0].text;
    document.getElementById('optionText2').innerHTML = question.options[1].text;
    
    // 호버 이벤트 추가
    setupImageHoverEffects();
    
    // 현재 호버된 카드가 있다면 강제로 호버 효과 적용 (데스크탑만)
    if (!isTouchDevice()) {
        setTimeout(() => {
            const optionCards = document.querySelectorAll('.option-card');
            optionCards.forEach(card => {
                if (card.matches(':hover')) {
                    const img = card.querySelector('.option-image');
                    if (img && img.dataset.hoverSrc) {
                        img.src = img.dataset.hoverSrc;
                    }
                }
            });
        }, 50); // 이미지 로드 후 약간의 지연
    }
}

// 옵션 선택
function selectOption(side) {
    const questionData = window.questions && window.questions.length > 0 ? window.questions : questions;
    const question = questionData[currentQuestion];
    const value = side === 'left' ? question.options[0].value : question.options[1].value;
    
    // 답변 저장
    userAnswers[currentQuestion] = value;
    
    // 다음 질문으로 바로 이동
    currentQuestion++;
    if (currentQuestion < questionData.length) {
        showQuestion();
    } else {
        showLoading();
    }
}

// 로딩 화면
function showLoading() {
    showScreen('loading-screen');
    
    // 이미지 순환 애니메이션 시작
    startLoadingAnimation();
    
    // 3초 후 결과 표시
    setTimeout(async () => {
        stopLoadingAnimation();
        await calculateResult();
    }, 3000);
}

// 로딩 애니메이션 관련 변수
let loadingInterval;
let currentImageIndex = 0;
const loadingImages = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png'];

// 슬롯머신 애니메이션 함수
function startSlotMachineAnimation(digitImages, finalDigits) {
    const animationDuration = 2000; // 2초
    const intervalTime = 100; // 100ms마다 숫자 변경
    const totalSteps = animationDuration / intervalTime;
    
    // 각 자릿수별로 애니메이션 시작 시간을 약간씩 다르게 설정
    digitImages.forEach((img, index) => {
        const delay = index * 150; // 각 자릿수마다 150ms씩 지연
        
        setTimeout(() => {
            let currentStep = 0;
            const interval = setInterval(() => {
                // 랜덤 숫자 표시 (애니메이션 중)
                const randomDigit = Math.floor(Math.random() * 10);
                img.src = `images/num_${randomDigit}.png`;
                img.alt = randomDigit.toString();
                
                currentStep++;
                
                // 애니메이션 종료 시점에서 최종 숫자로 설정
                if (currentStep >= totalSteps - (index * 2)) { // 뒤쪽 자릿수가 먼저 멈춤
                    clearInterval(interval);
                    img.src = `images/num_${finalDigits[index]}.png`;
                    img.alt = finalDigits[index];
                }
            }, intervalTime);
        }, delay);
    });
}

// 로딩 이미지 애니메이션 시작
function startLoadingAnimation() {
    const loadingImage = document.getElementById('loadingImage');
    if (!loadingImage) return;
    
    loadingInterval = setInterval(() => {
        // 현재 이미지에 스케일 아웃 애니메이션 (2배 더 빠르게)
        loadingImage.style.animation = 'imageScaleOut 0.05s ease-in-out';
        
        setTimeout(() => {
            // 다음 이미지로 변경
            currentImageIndex = (currentImageIndex + 1) % loadingImages.length;
            loadingImage.src = `images/${loadingImages[currentImageIndex]}`;
            
            // 스케일 인 애니메이션 (2배 더 빠르게)
            loadingImage.style.animation = 'imageScale 0.1s ease-in-out';
        }, 50);
    }, 200);
}

// 로딩 애니메이션 정지
function stopLoadingAnimation() {
    if (loadingInterval) {
        clearInterval(loadingInterval);
        loadingInterval = null;
    }
    currentImageIndex = 0;
}

// 결과 계산
async function calculateResult() {
    console.log('사용자 답변:', userAnswers);
    
    // 정적 데이터를 우선 사용 (CORS 문제 해결)
    resultTypes = staticResultTypes;
    console.log('정적 결과 데이터 사용:', Object.keys(resultTypes).length, '개');
    
    // 각 축별 점수 계산
    const scores = {
        economic: 0,
        life: 0,
        relationship: 0,
        emotion: 0
    };
    
    // 질문 1-2: 경제
    if (userAnswers[0] === 'economic_stable') scores.economic++;
    if (userAnswers[1] === 'economic_stable') scores.economic++;
    
    // 질문 3-4: 생활
    if (userAnswers[2] === 'life_stable') scores.life++;
    if (userAnswers[3] === 'life_stable') scores.life++;
    
    // 질문 5-6: 관계
    if (userAnswers[4] === 'relationship_yes') scores.relationship++;
    if (userAnswers[5] === 'relationship_yes') scores.relationship++;
    
    // 질문 7-8: 정서
    if (userAnswers[6] === 'emotion_satisfied') scores.emotion++;
    if (userAnswers[7] === 'emotion_satisfied') scores.emotion++;
    
    console.log('각 축별 점수:', scores);
    
    // 결과 키 생성 (2개 질문 모두 선택해야 해당 축으로 분류)
    const economicType = scores.economic >= 2 ? 'economic_stable' : 'economic_unstable';
    const lifeType = scores.life >= 2 ? 'life_stable' : 'life_unstable';
    const relationshipType = scores.relationship >= 2 ? 'relationship_yes' : 'relationship_no';
    const emotionType = scores.emotion >= 2 ? 'emotion_satisfied' : 'emotion_unsatisfied';
    
    const resultKey = `${economicType}_${lifeType}_${relationshipType}_${emotionType}`;
    
    console.log('생성된 결과 키:', resultKey);
    console.log('경제:', economicType, '(점수:', scores.economic, ')');
    console.log('생활:', lifeType, '(점수:', scores.life, ')');
    console.log('관계:', relationshipType, '(점수:', scores.relationship, ')');
    console.log('정서:', emotionType, '(점수:', scores.emotion, ')');
    
    console.log('사용 가능한 결과 키들:', Object.keys(resultTypes));
    
    const result = resultTypes[resultKey];
    console.log('찾는 키:', resultKey);
    console.log('사용 가능한 키들:', Object.keys(resultTypes));
    console.log('결과 데이터:', result);
    
    if (result) {
        console.log('결과 찾음:', result.title);
        showResult(result);
    } else {
        console.error('결과를 찾을 수 없습니다. 키:', resultKey);
        console.log('가장 가까운 키들:', Object.keys(resultTypes).filter(key => key.includes(economicType)));
        
        // 디버깅을 위한 추가 정보
        console.log('=== 디버깅 정보 ===');
        console.log('사용자 답변 배열:', userAnswers);
        console.log('각 답변별 상세:');
        userAnswers.forEach((answer, index) => {
            console.log(`질문 ${index + 1}: ${answer}`);
        });
        
        // 폴백: 디버깅용 기본 결과 표시
        const fallbackResult = {
            score: scores.economic + scores.life + scores.relationship + scores.emotion,
            animal: "🐱",
            title: "디버깅: 결과 키 매핑 오류",
            analysis: `결과 키를 찾을 수 없습니다.<br><br>생성된 키: ${resultKey}<br><br>점수 상세:<br>경제: ${scores.economic}/2점<br>생활: ${scores.life}/2점<br>관계: ${scores.relationship}/2점<br>정서: ${scores.emotion}/2점`,
            broccoli: ["콘솔 로그를 확인해주세요", "개발자에게 문의하세요"]
        };
        showResult(fallbackResult);
    }
}

// 동물 이모지와 캐릭터 이미지 매핑
const animalToCharacterMap = {
    '🐘': 'ch01.png',  // 코끼리
    '🦚': 'ch02.png',  // 공작
    '🐯': 'ch03.png',  // 호랑이
    '🦅': 'ch04.png',  // 독수리
    '🦝': 'ch05.png',  // 너구리
    '🦫': 'ch06.png',  // 비버
    '🐱': 'ch07.png',  // 고양이
    '🦉': 'ch08.png',  // 올빼미
    '🐒': 'ch09.png',  // 원숭이
    '🐑': 'ch10.png',  // 양
    '🦔': 'ch11.png',  // 고슴도치
    '🦡': 'ch12.png',  // 두더지
    '🐶': 'ch13.png',  // 강아지
    '🐥': 'ch14.png',  // 병아리
    '🐇': 'ch15.png',  // 토끼
    '🐹': 'ch16.png'   // 햄스터
};

// 결과 표시
function showResult(result) {
    console.log('결과 표시 중:', result);
    
    if (!result) {
        console.error('결과 데이터가 없습니다');
        return;
    }
    
    // 현재 결과를 전역 변수에 저장 (공유 기능에서 사용)
    currentResult = result;
    
    // 타이틀 설정 (당신은 -> 설명 -> 동물로 3줄 구조)
    const titleParts = result.title.match(/^당신은\s(.+)\s([가-힣]+)$/);
    let formattedTitle;
    
    if (titleParts) {
        // "당신은 XXXXX 동물" 형태를 3줄로 분리
        formattedTitle = `당신은<br>${titleParts[1]}<br>${titleParts[2]}`;
    } else {
        // 매칭되지 않는 경우 기존 방식 사용
        formattedTitle = result.title.replace(/([가-힣\s]+)\s([가-힣]+)$/, '$1<br>$2');
    }
    
    document.getElementById('resultTitle').innerHTML = formattedTitle;
    
    // 캐릭터 이미지 설정
    const characterImage = document.getElementById('characterImage');
    const characterFile = animalToCharacterMap[result.animal];
    if (characterFile) {
        characterImage.src = `images/${characterFile}`;
        characterImage.alt = result.title;
        
        // 캐릭터 변형 이미지 초기화
        initializeCharacterVariants(characterFile);
    }
    
    // 점수 설정 (슬롯머신 애니메이션으로 표시)
    const scoreContainer = document.getElementById('resultScore');
    scoreContainer.innerHTML = ''; // 기존 내용 초기화
    
    // 점수를 문자열로 변환
    const scoreString = result.score.toString();
    const finalDigits = scoreString.split('');
    
    // 각 자릿수별로 이미지 요소 생성
    const digitImages = [];
    finalDigits.forEach((digit, index) => {
        const img = document.createElement('img');
        img.src = `images/num_0.png`; // 초기값 0으로 시작
        img.alt = '0';
        img.className = 'score-digit';
        scoreContainer.appendChild(img);
        digitImages.push(img);
    });
    
    // 슬롯머신 애니메이션 시작
    startSlotMachineAnimation(digitImages, finalDigits);
    
    // 설명 설정
    document.getElementById('resultCurrent').innerHTML = result.analysis.replace(/\n/g, '<br>');
    
    // 할일 목록 설정
    const broccoliList = document.getElementById('resultBroccoli');
    broccoliList.innerHTML = '';
    if (result.broccoli && Array.isArray(result.broccoli)) {
        result.broccoli.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `- ${item}`;
            broccoliList.appendChild(li);
        });
    }
    
    showScreen('result-screen');
    console.log('결과 화면으로 전환 완료');
}

// 전역 변수로 현재 결과 저장
let currentResult = null;

// 공유하기
function shareResult() {
    // 현재 결과에서 점수 가져오기
    let score = '0';
    if (currentResult && currentResult.score) {
        score = currentResult.score;
    } else {
        // 폴백: DOM에서 점수 추출 시도
        const scoreElements = document.querySelectorAll('#resultScore .score-digit');
        if (scoreElements.length > 0) {
            score = '';
            scoreElements.forEach(img => {
                const digit = img.alt || img.src.match(/num_(\d)\.png/)?.[1] || '0';
                score += digit;
            });
        }
    }
    
    const text = `난 "${score}점" 나왔는데 넌 몇점인지 알려줘!!`;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: '혼자살기 내 점수는?',
            text: text,
            url: url
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(`혼자살기 내 점수는?\n${url}\n${text}`).then(() => {
            alert('결과가 클립보드에 복사되었습니다!');
        });
    }
}

// 다시하기
function restartTest() {
    currentQuestion = 0;
    userAnswers = {};
    userInfo = {};
    
    showScreen('main-screen');
}

// 수동 업데이트 함수 (개발자용)
window.updateFromMD = async function() {
    if (window.mdParser) {
        const success = await window.mdParser.loadFromMD();
        if (success) {
            window.mdParser.updateWebPage();
            alert('MD 파일에서 최신 데이터를 로드했습니다!');
            console.log('업데이트된 결과:', window.resultTypes);
        } else {
            alert('MD 파일 로드에 실패했습니다.');
        }
    } else {
        alert('MD 파서가 로드되지 않았습니다.');
    }
};


// 콘텐츠 수정 함수 (개발자용)
window.updateContent = function(animal, newTitle, newAnalysis, newBroccoli) {
    // 동물별 키 매핑
    const animalKeyMap = {
        '🐘': 'economic_stable_life_stable_relationship_yes_emotion_satisfied',
        '🦚': 'economic_stable_life_stable_relationship_yes_emotion_unsatisfied',
        '🐯': 'economic_stable_life_stable_relationship_no_emotion_satisfied',
        '🦅': 'economic_stable_life_stable_relationship_no_emotion_unsatisfied',
        '🦝': 'economic_stable_life_unstable_relationship_yes_emotion_satisfied',
        '🦫': 'economic_stable_life_unstable_relationship_yes_emotion_unsatisfied',
        '🐱': 'economic_stable_life_unstable_relationship_no_emotion_satisfied',
        '🦉': 'economic_stable_life_unstable_relationship_no_emotion_unsatisfied',
        '🐒': 'economic_unstable_life_stable_relationship_yes_emotion_satisfied',
        '🐑': 'economic_unstable_life_stable_relationship_yes_emotion_unsatisfied',
        '🦔': 'economic_unstable_life_stable_relationship_no_emotion_satisfied',
        '🦡': 'economic_unstable_life_stable_relationship_no_emotion_unsatisfied',
        '🐶': 'economic_unstable_life_unstable_relationship_yes_emotion_satisfied',
        '🐥': 'economic_unstable_life_unstable_relationship_yes_emotion_unsatisfied',
        '🐇': 'economic_unstable_life_unstable_relationship_no_emotion_satisfied',
        '🐹': 'economic_unstable_life_unstable_relationship_no_emotion_unsatisfied'
    };
    
    const key = animalKeyMap[animal];
    if (key && staticResultTypes[key]) {
        if (newTitle) staticResultTypes[key].title = newTitle;
        if (newAnalysis) staticResultTypes[key].analysis = newAnalysis.replace(/\n/g, '<br>');
        if (newBroccoli) staticResultTypes[key].broccoli = newBroccoli;
        
        console.log('콘텐츠 업데이트 완료:', animal, staticResultTypes[key]);
        alert('콘텐츠가 업데이트되었습니다!');
    } else {
        alert('해당 동물을 찾을 수 없습니다: ' + animal);
    }
};

// QA 테스트 함수
function runQATest() {
    console.log('=== QA 테스트 시작 ===');
    
    const testCases = [
        // 모든 positive 답변 (코끼리가 나와야 함)
        ['economic_stable', 'economic_stable', 'life_stable', 'life_stable', 'relationship_yes', 'relationship_yes', 'emotion_satisfied', 'emotion_satisfied'],
        
        // 모든 negative 답변 (햄스터가 나와야 함)
        ['economic_unstable', 'economic_unstable', 'life_unstable', 'life_unstable', 'relationship_no', 'relationship_no', 'emotion_unsatisfied', 'emotion_unsatisfied'],
        
        // 혼합 케이스 1 (경제만 positive)
        ['economic_stable', 'economic_stable', 'life_unstable', 'life_unstable', 'relationship_no', 'relationship_no', 'emotion_unsatisfied', 'emotion_unsatisfied'],
        
        // 혼합 케이스 2 (경제, 생활 positive)
        ['economic_stable', 'economic_stable', 'life_stable', 'life_stable', 'relationship_no', 'relationship_no', 'emotion_unsatisfied', 'emotion_unsatisfied'],
        
        // 경계 케이스 1 (각 축별로 1개씩만 positive)
        ['economic_stable', 'economic_unstable', 'life_stable', 'life_unstable', 'relationship_yes', 'relationship_no', 'emotion_satisfied', 'emotion_unsatisfied'],
        
        // 경계 케이스 2 (각 축별로 1개씩만 negative)
        ['economic_unstable', 'economic_stable', 'life_unstable', 'life_stable', 'relationship_no', 'relationship_yes', 'emotion_unsatisfied', 'emotion_satisfied']
    ];
    
    testCases.forEach((testAnswers, index) => {
        console.log(`\n--- 테스트 케이스 ${index + 1} ---`);
        console.log('답변:', testAnswers);
        
        // 점수 계산
        const scores = { economic: 0, life: 0, relationship: 0, emotion: 0 };
        if (testAnswers[0] === 'economic_stable') scores.economic++;
        if (testAnswers[1] === 'economic_stable') scores.economic++;
        if (testAnswers[2] === 'life_stable') scores.life++;
        if (testAnswers[3] === 'life_stable') scores.life++;
        if (testAnswers[4] === 'relationship_yes') scores.relationship++;
        if (testAnswers[5] === 'relationship_yes') scores.relationship++;
        if (testAnswers[6] === 'emotion_satisfied') scores.emotion++;
        if (testAnswers[7] === 'emotion_satisfied') scores.emotion++;
        
        // 결과 키 생성
        const economicType = scores.economic >= 2 ? 'economic_stable' : 'economic_unstable';
        const lifeType = scores.life >= 2 ? 'life_stable' : 'life_unstable';
        const relationshipType = scores.relationship >= 2 ? 'relationship_yes' : 'relationship_no';
        const emotionType = scores.emotion >= 2 ? 'emotion_satisfied' : 'emotion_unsatisfied';
        
        const resultKey = `${economicType}_${lifeType}_${relationshipType}_${emotionType}`;
        const result = staticResultTypes[resultKey];
        
        console.log('점수:', scores);
        console.log('생성된 키:', resultKey);
        console.log('결과:', result ? `${result.animal} ${result.title}` : '❌ 결과 없음');
    });
    
    console.log('\n=== 모든 가능한 결과 키 확인 ===');
    Object.keys(staticResultTypes).forEach(key => {
        const result = staticResultTypes[key];
        console.log(`${key} → ${result.animal} ${result.title}`);
    });
}

// 캐릭터 이미지 변경 기능
let currentCharacterBase = '';
let currentCharacterVariants = [];
let currentCharacterIndex = 0;
let autoAnimationTimer = null;

// 핑퐁 애니메이션 관련 변수
let pingpongTimer = null;
let pingpongState = 0; // 0: 1,3번 변경, 1: 2,4번 변경
const pingpongImages = ['main_center.png', '01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png'];

function changeCharacterImage(isClicked = false) {
    if (!currentCharacterBase || currentCharacterVariants.length === 0) return;
    
    const characterImage = document.getElementById('characterImage');
    
    // 클릭된 경우 흔들림 효과 추가
    if (isClicked) {
        characterImage.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            characterImage.style.animation = 'floating 3s ease-in-out infinite';
        }, 500);
    }
    
    // 다음 이미지로 변경 (순환)
    currentCharacterIndex = (currentCharacterIndex + 1) % currentCharacterVariants.length;
    const newImageSrc = currentCharacterVariants[currentCharacterIndex];
    
    // 사라지는 동물: 정상 -> 100 (흰색)
    characterImage.style.transition = 'filter 0.25s ease';
    characterImage.style.filter = 'brightness(2)'; // 흰색 틴트
    
    setTimeout(() => {
        // 이미지 변경
        characterImage.src = newImageSrc;
        
        // 나타나는 동물: 100 (흰색) -> 정상
        characterImage.style.filter = 'brightness(2)'; // 시작은 흰색
        
        // 즉시 정상으로 복귀 애니메이션 시작
        setTimeout(() => {
            characterImage.style.filter = 'brightness(1)'; // 디폴트로 복귀
        }, 10); // 아주 짧은 지연 후 복귀 애니메이션 시작
        
    }, 250); // 0.25초 후 이미지 변경
}


function initializeCharacterVariants(characterFile) {
    if (!characterFile) return;
    
    // 기본 파일명에서 확장자 제거
    const baseName = characterFile.replace('.png', '');
    currentCharacterBase = baseName;
    
    // 변형 이미지 배열 생성 (기본 + a, b, c 버전)
    currentCharacterVariants = [
        `images/${characterFile}`,           // 기본
        `images/${baseName}-a.png`,         // a 버전
        `images/${baseName}-b.png`,         // b 버전  
        `images/${baseName}-c.png`          // c 버전
    ];
    
    currentCharacterIndex = 0; // 기본 이미지부터 시작
    
    // 자동 애니메이션 시작
    startAutoAnimation();
    
    // 핑퐁 애니메이션 시작
    startPingpongAnimation();
}

function startAutoAnimation() {
    // 기존 타이머가 있다면 정리
    if (autoAnimationTimer) {
        clearInterval(autoAnimationTimer);
    }
    
    // 2초마다 자동으로 이미지 변경
    autoAnimationTimer = setInterval(() => {
        changeCharacterImage(false); // 자동이므로 흔들림 없음
    }, 2000);
}

function stopAutoAnimation() {
    if (autoAnimationTimer) {
        clearInterval(autoAnimationTimer);
        autoAnimationTimer = null;
    }
}

// 클릭 이벤트 핸들러 (흔들림 효과 포함)
function onCharacterClick() {
    // 자동 애니메이션 일시 정지
    stopAutoAnimation();
    
    // 클릭 애니메이션 실행
    changeCharacterImage(true); // 클릭이므로 흔들림 추가
    
    // 1초 후 자동 애니메이션 재시작
    setTimeout(() => {
        startAutoAnimation();
    }, 1000);
}

// 핑퐁 애니메이션 함수들
function startPingpongAnimation() {
    // 기존 타이머가 있다면 정리
    if (pingpongTimer) {
        clearInterval(pingpongTimer);
    }
    
    // 1초마다 핑퐁 패턴으로 이미지 변경
    pingpongTimer = setInterval(() => {
        changePingpongImages();
    }, 1000);
}

function stopPingpongAnimation() {
    if (pingpongTimer) {
        clearInterval(pingpongTimer);
        pingpongTimer = null;
    }
}

function changePingpongImages() {
    if (pingpongState === 0) {
        // 1번과 3번 이미지 변경
        changeRandomPingpongImage(1);
        changeRandomPingpongImage(3);
    } else {
        // 2번과 4번 이미지 변경
        changeRandomPingpongImage(2);
        changeRandomPingpongImage(4);
    }
    
    // 상태 토글 (0 ↔ 1)
    pingpongState = 1 - pingpongState;
}

function changeRandomPingpongImage(imageNumber) {
    const imageElement = document.getElementById(`pingpongImage${imageNumber}`);
    if (imageElement) {
        // 현재 이미지와 다른 랜덤 이미지 선택
        const currentSrc = imageElement.src;
        let newImage;
        do {
            newImage = pingpongImages[Math.floor(Math.random() * pingpongImages.length)];
        } while (currentSrc.includes(newImage) && pingpongImages.length > 1);
        
        // 새 이미지로 변경
        imageElement.src = `images/${newImage}`;
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('1인 가구 생존 유형 테스트가 로드되었습니다.');
    console.log('정적 결과 데이터 사용 중:', Object.keys(staticResultTypes).length, '개');
    console.log('콘텐츠 수정: updateContent(동물이모지, 새제목, 새분석, 새브로콜리) 함수를 콘솔에서 실행하세요');
    console.log('QA 테스트: runQATest() 함수를 콘솔에서 실행하세요');
});
