import {Component, HostListener, OnInit} from '@angular/core';
import {Introduction} from './model/introduction';
import {Speaker} from './model/speaker';
import {Schedules} from './model/schedules';
import {ScheduleItem} from './model/scheduleItem';
import {Image} from 'app/model/image';
import {WindowRefService} from './service/window-ref.service';
import {Information} from './model/information';
import {Price} from './model/Price';

@Component({
  selector: 'kosta',
  templateUrl: 'kosta-nz.html'
})
export class KostaComponent implements OnInit {
  currentSection: String;
  title: String;
  subTitle: String;
  location: String;
  datetime: String;
  kostaIntro: Array<Introduction>;
  speakers: Array<Speaker>;
  schedules: Array<Schedules>;
  conferenceInfo: Information;
  address: String;
  email: String;
  phoneNumber: String;
  galleryImages: Array<Image>;

  constructor() {
    this.kostaIntro = new Array<Introduction>();
    this.speakers = new Array<Speaker>();
    this.schedules = new Array<Schedules>();
    this.conferenceInfo = new Information();
    this.galleryImages = new Array<Image>();
  }

  ngOnInit() {
    this.loadBasicDetails();
    this.loadIntroduction();
    this.loadSpeakers();
    this.loadSchedules();
    this.loadConferenceInformation();
    this.loadContacts();
    this.loadImages();
  }

  enter(name: String) {
    this.currentSection = name;
  }

  private loadContacts() {
    this.address = 'Waikato University, Hillcrest, Hamilton 3216, New Zealand';
    this.email = 'kostanz@gmail.com';
  }

  private loadImages() {
    this.galleryImages.push(new Image('kostanz1.jpg', 'gallery1.jpg', ''));
    this.galleryImages.push(new Image('kostanz2.jpg', 'gallery2.jpg', ''));
    this.galleryImages.push(new Image('kostanz3.jpg', 'gallery3.jpg', ''));
    this.galleryImages.push(new Image('kostanz4.jpg', 'gallery3.jpg', ''));
    this.galleryImages.push(new Image('kostanz5.jpg', 'gallery1.jpg', ''));
    this.galleryImages.push(new Image('kostanz6.jpg', 'gallery2.jpg', ''));
    this.galleryImages.push(new Image('kostanz7.jpg', 'gallery3.jpg', ''));
    this.galleryImages.push(new Image('kostanz8.jpg', 'gallery3.jpg', ''));
  }

  private loadBasicDetails() {
    this.subTitle = '';
    this.title = '';
    this.location = 'University of Waikato';
    this.datetime = '21-24.Nov.2017';
  }

  private loadIntroduction() {
    this.kostaIntro.push(new Introduction('fa-book', 'Theme', '새 시대의 제사장과 소명', `
      종교개혁 5백년을 기념하는 해입니다.
      종교개혁의 중요한 교리적 기초가 만인제사장론 이었습니다. 
      사제만이 아닌 모든 신자가 제사장이라는 것이었습니다. 
      하나님과 인간 사이에 그리스도만이 유일한 중보자이시고 
      그리스도를 통해 우린 모두 직접적으로 신께 나아갈 수 있음은 
      종교제도에 구속된 당시의 신자들의 해방이었습니다.
      
      성도들은 직접 성경을 읽기 시작했으며 직접 하나님께 기도하기 시작했습니다.
      그리고 그들을 해방하신 구주를 전하기 시작했습니다. 
      그리스도의 아름다운 구원의 덕을 선전하기 시작했습니다. 
      더 나아가 모든 직업이 소명임을 발견하기 시작했습니다. 우리의 일터에 그리스도의 주권이 실현되기 시작했습니다.
      
      그러나 종교개혁의 숙제는 아직도 미완성입니다.
      교회 내 모든 평신도들이 자신의 미션을 발견할 수 있어야 하고 
      그들의 모든 직업의 장에서 하나님 나라가 임함을 소명으로 알 때 
      그리고 이 땅의 모든 교회들이 평신도들을 기꺼이 해방할 수 있을 때 
      우리는 교회와 일터에 임하는 하나님 나라의 영광을 보게 될 것입니다.
      이 밝아오는 새 시대의 주인공이 코스탄이기를 소망합니다.
      
      우리의 교회가 교회되어지고 일터가 또 하나의 교회가 되도록 
      학문과 직업이 연결되는 그 위대한 비전의 시간이기를 축복합니다.
      `,
      'assets/img/theme.png'));      
    this.kostaIntro.push(new Introduction('fa-video-camera', 'Video', 'Video', 'text2', 'assets/img/imac-371x412.png'));
    this.kostaIntro.push(new Introduction('fa-file-text-o', 'Promotion package', 'Promotion package', 'text2', 'assets/img/imac-371x412.png'));
  }

  private loadSpeakers() {    
    this.speakers.push(new Speaker('assets/img/speakers/yes.jpg', '윤은성 강사', 'title', 'details'));
    this.speakers.push(new Speaker('assets/img/speakers/kdh.jpg', '김도현 강사', 'title3', 'Colorado Christian University 고등학교 졸업 후 가족과 미국으로 건너가 LA에서 이민생활을 시작했고, 나성영락교회 대학부 시절 하나님의 부르심을 받았다. UCLA에서 역사를 공부하고 Fuller (MDiv), Yale (STM)에서 공부한 후 Union 신학교에서 신약학으로 Ph.D.를 받았다. Sterling College에서 종교학 과장을 역임했으며 현재 Denver에 있는 Colorado Christian University에서 신약학과 헬라어를 가르치고 있다. 또한 장로교 목사로 볼더한인교회를 담임하고 있다. 저서로는 <나의 사랑하는 책 로마서>, <빌립보서 어떻게 읽을 것인가>가 있다.'));
    this.speakers.push(new Speaker('assets/img/speakers/speaker1.jpg', '김창근 강사', 'title3', 'details4'));
    this.speakers.push(new Speaker('assets/img/speakers/cjw.png', '채종욱 강사', 'title3', 'GBM Korea / GBM Asia (인도) 그룹회장이며, 미주 GMP 선교회 이사장과 사업체와 비영리구호단체인 빈손채움재단의 이사장이기도 하다. 비즈니스를 통해 선교적 삶을 살아가는 대안적 선교방식을 알리고 있다. 비즈니스선교모델을 개발하고 선교지에 적용하는 노력을 기울이며, 관심자들을 적극적으로 돕고 있다.'));
    this.speakers.push(new Speaker('assets/img/speakers/speaker1.jpg', '박동희 강사', 'title3', 'details4'));
    this.speakers.push(new Speaker('assets/img/speakers/speaker1.jpg', '서재석 강사', 'title3', 'details4'));
  }

  private loadSchedules() {
    let firstDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    firstDay.push(new ScheduleItem('1:30 PM', '3:00 PM', '등록 / 숙소 배정', '', '', 'fa-calendar'));
    firstDay.push(new ScheduleItem('3:00 PM', '4:15 PM', '개회예배', '양승봉', '', 'fa-institution'));
    firstDay.push(new ScheduleItem('4:15 PM', '5:00 PM', '오리엔테이션', '', '', 'fa-bullhorn'));
    firstDay.push(new ScheduleItem('5:00 PM', '5:30 PM', '조별 모임', '', '', 'fa-users'));
    firstDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    firstDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '김대로', '', 'fa-institution'));
    firstDay.push(new ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', 'fa-users'));

    let secondDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    secondDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', 'fa-users'));
    secondDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', 'fa-institution'));
    secondDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '오전특강', '탁지원', '', 'fa-institution'));
    secondDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('1:50 PM', '3:20 PM', '세미나1', '', '', 'fa-edit'));
    secondDay.push(new ScheduleItem('3:40 PM', '5:10 PM', '세미나2', '', '', 'fa-edit'));

    secondDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    secondDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '송병주', '', 'fa-institution'));
    secondDay.push(new ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', 'fa-users'));

    let thirdDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    thirdDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', 'fa-users'));
    thirdDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '아침 식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', 'fa-institution'));
    thirdDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '이영길', '', 'fa-institution'));
    thirdDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('1:50 PM', '3:20 PM', '세미나3', '', '', 'fa-edit'));
    thirdDay.push(new ScheduleItem('3:40 PM', '5:10 PM', '세미나4 / 교역자 세미나', '', '', 'fa-edit'));

    thirdDay.push(new ScheduleItem('5:30 PM', '6:30 PM', '저녁 식사', '', '', 'fa-cutlery'));
    thirdDay.push(new ScheduleItem('6:30 PM', '9:30 PM', '저녁 집회', '송병주', '', 'fa-institution'));
    thirdDay.push(new ScheduleItem('9:40 PM', '11:00 PM', '조별 나눔', '', '', 'fa-users'));

    let lastDay: Array<ScheduleItem> = new Array<ScheduleItem>();
    lastDay.push(new ScheduleItem('7:00 AM', '8:00 AM', '조별 QT 및 나눔', '', '', 'fa-users'));
    lastDay.push(new ScheduleItem('8:00 AM', '9:00 AM', '숙소 Checkout 후 아침 식사', '', '', 'fa-cutlery'));
    lastDay.push(new ScheduleItem('9:15 AM', '10:55 AM', '성경 강해', '배덕만', '', 'fa-institution'));
    lastDay.push(new ScheduleItem('11:20 AM', '12:30 PM', '주제 강의', '', '', 'fa-institution'));
    lastDay.push(new ScheduleItem('12:30 PM', '1:30 PM', '점심식사', '', '', 'fa-cutlery'));
    lastDay.push(new ScheduleItem('1:50 PM', '3:15 PM', '폐회 예배', '송병주', '', 'fa-institution'));
    lastDay.push(new ScheduleItem('3:15 PM', '4:15 PM', '악수례 / 단체 사진촬영', '', '', 'fa-camera'));

    let tuesday: Schedules = new Schedules('TUE 21 NOV', firstDay);
    let wednesday: Schedules = new Schedules('WED 22 NOV', secondDay);
    let thursday: Schedules = new Schedules('THUR 23 NOV', thirdDay);
    let friday: Schedules = new Schedules('FRI 24 NOV', lastDay);
    this.schedules.push(tuesday);
    this.schedules.push(wednesday);
    this.schedules.push(thursday);
    this.schedules.push(friday);
  }

  private loadConferenceInformation() {
    let prices: Array<Price> = new Array<Price>();
    let earlyBird: Price = new Price("Early Bird Registration Sunday 01 Oct – Sunday 12 Nov","$240","$210");
    let full: Price = new Price("Full Registration Monday 13 Nov – Tuesday 21 Nov","$260","$230");
    let ministry: Price = new Price("사역자","$120","$120");
    let oneDay: Price = new Price("당일 (1일)*","$70","$70");
    let oneDayPlusSleep: Price = new Price("당일 (1일 + 숙박)**","$100","$100");
    prices.push(earlyBird);
    prices.push(full);
    prices.push(ministry);
    prices.push(oneDay);
    prices.push(oneDayPlusSleep);

    let notes: Array<String> = new Array<String>();
    notes.push("*당일참석은 아침 6시부터 밤 12시까지이며 모든 식사를 포함합니다.");
    notes.push("**숙박을 하는 당일참석은 아침 6시부터 다음날 12시까지이며 모든 식사를 포함합니다.");

    let howTo: Array<String> = new Array<String>();
    howTo.push("» ONLINE: 웹사이트를 통해 등록할 경우 여기를 클릭해 주세요.");
    howTo.push("» OFFLINE: 여기를 클릭하여 신청서를 다운로드 받아 작성하신 후 우편으로 발송해 주세요.");

    let howToDeposit: Array<String> = new Array<String>();
    howToDeposit.push(`
      » CHEQUE:
      우편 발송 주소: PO Box 300487, Albany, Auckland 0752 (봉투에 "KOSTA"라고 기입).
      체크 받는 사람 (Payable to)은 "KOSTA"로 해주시기 바랍니다.
    `);
    howToDeposit.push(`
      » BANK DEPOSIT:
      Bank: Westpac
      Branch: Downtown
      Account Name: KOSTA
      Account Number: 03-1509-0195677-02 (청년 코스타)
    `);
    howToDeposit.push("주의사항: 참가비를 입금할 때는 reference에 반드시 등록하신 영문이름과 같은 이름이나 핸드폰 번호를 적으셔야합니다.");

    let attention: Array<String> = new Array<String>();
    attention.push("신청서를 보냈어도 참가비를 완납하셔야 등록이 됨을 유의하시기 바랍니다.");
    attention.push("11월 13일 까지 취소할 경우에 100% 환불되며, 그 이후는 환불이 되지 않습니다.");
    attention.push("집회 당일 등록하시는 경우에는 현금, 체크 또는 eftpos로 참가비를 받습니다.");

    this.conferenceInfo.prices = prices;
    this.conferenceInfo.notes = notes;
    this.conferenceInfo.howTo = howTo;
    this.conferenceInfo.howToDeposite = howToDeposit;
    this.conferenceInfo.attention = attention;
  }

}
