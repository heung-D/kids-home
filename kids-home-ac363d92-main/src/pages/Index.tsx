import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mainScreen1 from "@/assets/main-screen-1.jpg";
import mainScreen2 from "@/assets/main-screen-2.jpg";
import mainScreen3 from "@/assets/main-screen-3.jpg";
import leftMenu1 from "@/assets/left-menu-1.jpg";
import leftMenu2 from "@/assets/left-menu-2.jpg";
import rightMenu1 from "@/assets/right-menu-1.jpg";
import rightMenu2 from "@/assets/right-menu-2.jpg";
import bottomMenu1 from "@/assets/bottom-menu-1.jpg";
import gptMenu from "@/assets/gpt-menu.jpg";
import memberInfo from "@/assets/member-info.jpg";
import stampMenu from "@/assets/stamp-menu.png";
import budgetApply from "@/assets/budget-apply.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
          키즈홈 메인화면 설명서
        </h1>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger value="main">메인화면</TabsTrigger>
            <TabsTrigger value="shortcuts">단축아이콘</TabsTrigger>
            <TabsTrigger value="left-menu">좌측메뉴</TabsTrigger>
            <TabsTrigger value="right-menu">우측메뉴</TabsTrigger>
            <TabsTrigger value="bottom">하단메뉴</TabsTrigger>
            <TabsTrigger value="member">회원정보</TabsTrigger>
            <TabsTrigger value="budget">예산신청</TabsTrigger>
          </TabsList>

          {/* 메인화면 (상단 제목) */}
          <TabsContent value="main" className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. 키즈홈 메인화면 (상단 제목) 간단하게 설명
              </h2>
              <img
                src={mainScreen1}
                alt="키즈홈 메인화면"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground">
                <p>① 회계입력 : 어린이집 계좌를 등록해서 회계정리를 하는 메뉴들이 모여 있습니다.</p>
                <p>② 예산/결산 : 예산과 추경 그리고 결산 메뉴</p>
                <p>③ 회계통합및정산서 : 합계시산표 와 같은 합산자료와 필요경비 정산서 같은 각종 정산서</p>
                <p>④ 장부출력 : 월별 각종 장부를 프린트</p>
                <p>⑤ 노무컨설팅 : 근로자와 관련된 모든 메뉴</p>
                <p>⑥ 급여.세무컨설팅 : 근로자 급여와 세무와 관련된 메뉴</p>
                <p>⑦ 입/퇴사관리 : 4대보험 신고 메뉴</p>
                <p>⑧ 원아관리 : 아동관리</p>
                <p>⑨ 영수증및스쿨뱅킹 : 필요경비 등 고객에게서 CMS로 출금</p>
                <p>⑩ 공문서류 : 공문을 작성</p>
                <p>⑪ 보건복지부지도점검 : 지도점검 서류 모음</p>
                <p>⑫ 커뮤니티 : 공지사항 쪽지 등</p>
                <p>⑬ 평가인증 : 평가인증 서류 모음</p>
              </div>
            </div>
          </TabsContent>

          {/* 단축아이콘 */}
          <TabsContent value="shortcuts" className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. 키즈홈 메인화면 (단축아이콘)
              </h2>
              <p className="text-muted-foreground mb-4">
                키즈홈에서 자주 사용하는 기능을 바로 이용할 수 있습니다.
              </p>
              <img
                src={mainScreen2}
                alt="단축아이콘"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground">
                <p>① 빠른장부입력 : 어린이집 회계를 빠르게 정리할 수 있는 회계정리 화면입니다.</p>
                <p>② 필요경비정산 : 필요경비 정산화면</p>
                <p>③ 누리정산 : 누리과정 정산화면</p>
                <p>④ 시간제정산 : 시간제 정산화면</p>
                <p>⑤ 월마감 : 월별 회계를 자동 분석 및 오류 체킹 및 마감</p>
                <p>⑥ 연별시산표 : 1년 회계 계정별 통계</p>
                <p>⑦ 회계규칙 : 세입 세출 계정별 규칙설명</p>
                <p>⑧ 급여대장 : 월별 급여대장</p>
                <p>⑨ 근로계약서 : 근로자 근로계약서 작성</p>
                <p>⑩ 연차관리 : 근로자 연차 처리</p>
              </div>
            </div>
          </TabsContent>

          {/* 좌측메뉴 */}
          <TabsContent value="left-menu" className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                좌메뉴 설명
              </h2>
              <img
                src={leftMenu1}
                alt="좌측 메뉴"
                className="max-w-md rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground mb-8">
                <p>① 회원정보수정 : 회원 정보를 수정</p>
                <p>② 원장님전용자료보관함 : 키즈홈 담당자가 개별적으로 보낸 자료</p>
                <p>③ 보관함</p>
                <p>④ 0000년 추가경정예산 : 해당년도 추경을 키즈홈 담당자에게 유상으로 작성요청</p>
                <p>⑤ 0000년 예산계획 : 해당년도 예산을 키즈홈 담당에게 유상 작성 요청</p>
                <p>⑥ 0000년 원천세 : 해당년도 원천세컨설팅을 유상으로 신청</p>
                <p>⑦ 어린이집 관리시스템 : 서울.경기.인천.충북.경북형 시스템과 키즈홈이 연동할 수 있는 메뉴</p>
                <p>⑧ 키즈홈 대표이사 : 회사 소개 동영상</p>
                <p>⑨ 이대희대표 : 이대희 대표 2016년 다양한 강의 동영상</p>
                <p>⑩ 키즈홈영수증출력 : 키즈홈 사용료 세금계산서 출력</p>
                <p>⑪ 보육통합서비스 : 보육통합사이트로 이동</p>
                <p>⑫ 급간식비계산 : 적정 급간식비 수동 계산</p>
                <p>⑬ 교사퇴직금계산 : 교사 퇴직금 수동 계산기</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">
                좌중간메뉴
              </h2>
              <img
                src={leftMenu2}
                alt="좌중간 메뉴"
                className="max-w-md rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground">
                <p>① 인사업무 : 근로자 분이 접수한 것 중 미처리</p>
                <p>② 원장님 꼭 한번보세요 : 키즈홈 사용시 원장님의 협조가 필요한 내용정리</p>
                <p>③ 키즈홈 소개하고 : 키즈홈 주변에 홍보해서 전화를 요청할 때</p>
                <p>④ 년간급식비점검 : 키즈홈 입력된 자료를 가지고 급식비 검토</p>
                <p>⑤ 일정관리 : 일정을 등록 관리 할 수 있는 달력</p>
              </div>
            </div>
          </TabsContent>

          {/* 우측메뉴 */}
          <TabsContent value="right-menu" className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                우측메뉴
              </h2>
              <img
                src={rightMenu1}
                alt="우측 메뉴"
                className="max-w-md rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground mb-8">
                <p>① 조정마감현황 : 원장님의 담당자가 조정마감을 진행 중에 있습니다.</p>
                <p>② 서비스 진행상태</p>
                <p className="ml-4">- 예산과 원천세 신청여부</p>
                <p className="ml-4">- 사무수임이 한국인사노무로 되어있어야 4대 보험이 자동처리가 됩니다.</p>
                <p className="ml-4">- 해당월 회계 자료마감과 장부배송 일자가 나옵니다.</p>
                <p>③ 입퇴사관리 : 4대보험 신고 상태</p>
                <p>④ 원장님담당메니저 : 키즈홈 본사 담당자나 대리점 이름과 연락처</p>
                <p>⑤ 키즈홈개인정보위탁계약서 : 키즈홈 개인정보활용동의 약정서</p>
                <p>⑥ 키즈홈홈페이지 : 키즈홈 홈페이지로 이동</p>
                <p>⑦ 최근접속내역 : 키즈홈 로그인 이력</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">
                우측끝메뉴
              </h2>
              <img
                src={rightMenu2}
                alt="우측끝 메뉴"
                className="max-w-md rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground">
                <p>① 국공립어린이집필수서비스 : 국공립원장님들이 필요한 서비스 홍보</p>
                <p>② 전국꼭배달 : 키즈홈 제휴 꽃배달서비스</p>
                <p>③ 1개월공짜 : 키즈홈 소개 신규 어린이집 연락처 입력</p>
                <p>④ 원장님을위한동영상 : 키즈홈 사용방법 동영상 모음</p>
                <p>⑤ 원장님이제영수증풀칠 : 영수증 등록 서비스 안내</p>
                <p>⑥ 자동연동서비스 : 지자체 회계프로그램과 연동 서비스 안내</p>
                <p>⑦ 키즈홈급여관리 : 매월 급여대장을 대신 작성해주는 서비스</p>
                <p>⑧ 어린이집 근로자사이트 : 근로자 전용사이트 홍보페이지</p>
                <p>⑨ 4대보험 자동신고 : 4대 보험 신고 홍보페이지</p>
                <p>⑩ 4대보험료 자동조회 : 4대 보험료 자동 조회 홍보페이지</p>
              </div>
            </div>
          </TabsContent>

          {/* 하단메뉴 */}
          <TabsContent value="bottom" className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                하단 메인화면
              </h2>
              <img
                src={bottomMenu1}
                alt="하단 메뉴"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground mb-8">
                <p>① 어린이집 원장님을 위한 : 키즈홈 사용관련 다양한 동영상 모음, 2016년도 촬영본입니다.</p>
                <p>② 특별판매 : 특정한 상품을 온라인 판매 (현재는 이용 하지 않습니다.)</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">
                무료 GPT
              </h2>
              <img
                src={gptMenu}
                alt="무료 GPT"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-2 text-muted-foreground">
                <p>키즈홈 고객이면 어린이집 운영에 훈련이 된 누구나 무료로 GPT 활용</p>
              </div>
            </div>
          </TabsContent>

          {/* 회원정보수정 */}
          <TabsContent value="member" className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                메인화면 - 회원정보수정
              </h2>
              <img
                src={memberInfo}
                alt="회원정보수정"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>회원정보수정: 키즈홈에 등록된 정보를 수정하실 수 있습니다.</p>
                <p>① 기본정보 중에서는 사업체명, 사업자번호, 대표자명, 대표자주민번호, 아이디는 수정이 안됩니다. 해당 부분을 수정해야 되면 키즈홈으로 연락 주세요</p>
                <p>② 이메일을 등록한 곳은 "전자세금계산서"가 발급이 되고, 해당 메일로 전송이 됩니다. 메일이 없는 곳은 모두 현금으로 매출 신고가 됩니다.</p>
                <p>③ 거래내역 정렬순서 - 역순: 빠른 장부의 은행거래내역이 과거 순부터 나옵니다. (키즈홈에서 역순을 권장합니다.)</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">
                수동도장등록
              </h2>
              <img
                src={stampMenu}
                alt="수동도장등록"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>① 결재자: 담당/원장을 다른 이름으로 변경하실 분, 가령 주임/원장 이렇게 각각 입력 후 "결재자명칭/수동도장 저장"을 눌러 주시면 변경됩니다.</p>
                <p>② 수동도장등록: 어린이집에서 사용하시는 도장을 담당/원장 순으로 등록하시려면 스캔이나 사진을 찍어 도장 부분만 잘라서 등록을 해 주세요.</p>
                <p>③ 직인출력물 반영여부 - "반영" : 지출 결의서 등 모든 출력물에 등록된 도장이 찍혀서 나옵니다.</p>
                <p>④ 도장을 만들어 등록하실 수 있습니다. 도장에 들어갈 내용을 입력 후, 서체와 형태를 선택 후 "도장샘플 만들기"를 눌러 주시면 도장이 자동으로 만들어 집니다.</p>
              </div>
            </div>
          </TabsContent>

          {/* 예산신청 */}
          <TabsContent value="budget" className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                예산신청
              </h2>
              <img
                src={budgetApply}
                alt="예산신청"
                className="w-full rounded-lg mb-6"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>0000년도 예산을 담당자 분에게 유상으로 신청을 의뢰하는 곳입니다.</p>
                <p>① 예산은 정원 기준으로 작성하면 됩니다.</p>
                <p>② 항목과 금액 인원 3칸의 내용을 원장님 원에 맞는 내용을 수정</p>
                <p>③ 가능한 상세하게 기록을 해 주셔야 됩니다.</p>
                <p>④ 본예산을 신청하면 추경을 1년 3회(마지막 결산 추경)가 포함된 금액입니다.</p>
                <p>⑤ 자동으로 정원에 따른 예산 의뢰 비용이 나옵니다.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
