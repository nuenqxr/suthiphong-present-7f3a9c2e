const slides = [
  {
    id: 'cover',
    no: '00',
    layout: 'a',
    kicker: 'ก.ค. – ก.ย. 2026',
    title: 'นำเสนอ\nผลงาน Q3',
    sub: 'Vinai Developer',
    name: 'Sutthiphong Raiphobn',
  },
  {
    id: 'challenge',
    no: '01',
    layout: 'a',
    kicker: 'Legal Assessment · Inspection Batch',
    title: 'งานที่\nท้าทายที่สุด',
    columns: [
      {
        heading: 'Legal Assessment',
        items: [
          'ลูกค้าต้องการใช้สัปดาห์ถัดไป เวลาทำจริงแค่ 10 วัน',
          'ทั้งโมดูล ทั้ง Flutter และ Go API',
          'เชื่อมกับ NCR และ workflow engine เดิม',
          'ผ่านมาได้: วาง contract API ก่อน, แตก branch ย่อย, ย้ายเป็น StatefulShellRoute',
        ],
      },
      {
        heading: 'Inspection Batch',
        items: [
          'รับ requirement จากลูกค้าโดยตรง',
          'ลูกค้าใช้งานจริงครั้งแรก ๆ ของ Vinai',
          'กดดันและท้าทายคนละแบบ แต่สนุกไปกับงาน',
          'หวังให้ลูกค้าพึงพอใจกับระบบ',
        ],
      },
    ],
  },
  {
    id: 'time',
    no: '02',
    layout: 'a',
    kicker: 'งานที่เสียเวลามากที่สุด',
    title: 'merge &\nconflict',
    columns: [
      {
        heading: 'เกิดอะไรขึ้น',
        items: [
          'การรวมโค้ดเป็นปัญหาต้น ๆ ที่ทำให้ล่าช้า',
          'dev หลายคน โค้ดตกหล่นบ่อยครั้ง',
          'เทสเตอร์ต้องเทสซ้ำ',
          'Refactor UI ก่อนยืนยัน spec จนต้อง revert',
        ],
      },
      {
        heading: 'จะไม่ให้เกิดซ้ำ',
        items: [
          'ตกลง spec และ checklist ก่อน refactor',
          'แบ่งงานก้อนเล็ก merge เข้า develop เร็วขึ้น',
          'รัน integrity check หลัง merge ทุกครั้ง',
          'ใช้ merge driver ของ lang json',
          'จองเลข migration ก่อนเริ่ม',
        ],
      },
    ],
  },
  {
    id: 'growth',
    no: '03',
    layout: 'a',
    kicker: 'เก่งขึ้นไหม',
    title: 'เก่งขึ้น',
    columns: [
      {
        heading: 'full-stack ได้ดีขึ้น',
        items: [
          'ทำฟีเจอร์หลักหลายอัน แล้วกลับไปแก้สิ่งที่เคยทำไม่ได้',
          'ฟีเจอร์เก่าเคยทำแค่ frontend แล้วรอ backend เพิ่มให้ ใช้เวลาราวครึ่งวัน',
          'ตอนนี้ทำเองได้ ไม่เกิน 1 ชั่วโมง',
        ],
      },
      {
        heading: 'ผลต่อทีม',
        items: [
          'งานราบรื่น คล่องตัวขึ้น',
          'พี่ ๆ วางใจ',
          'ไปช่วยงานฝั่งลูกค้าได้มากขึ้น',
          'ส่งมอบ 4 โมดูลใหญ่ใน Q3',
        ],
      },
    ],
    note: 'ต่อเนื่อง Q4 — แชท AI น้องวิ + MCP (prototype)',
  },
];

Vue.createApp({
  data() {
    const n = parseInt(location.hash.slice(1), 10);
    return { slides, index: n >= 1 && n <= slides.length ? n - 1 : 0, dir: 'next' };
  },
  computed: {
    current() { return this.slides[this.index]; },
  },
  methods: {
    go(i) {
      if (i < 0 || i >= this.slides.length || i === this.index) return;
      this.dir = i > this.index ? 'next' : 'prev';
      this.index = i;
      location.hash = '#' + (i + 1);
    },
    next() { this.go(this.index + 1); },
    prev() { this.go(this.index - 1); },
    onClick(e) {
      if (e.target.closest('.nav, .topbar')) return;
      this.next();
    },
    onKey(e) {
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); this.next(); }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); this.prev(); }
      else if (e.key === 'Home') this.go(0);
      else if (e.key === 'End') this.go(this.slides.length - 1);
      else if (e.key === 'f') document.documentElement.requestFullscreen?.();
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKey);
  },
  unmounted() { window.removeEventListener('keydown', this.onKey); },
}).mount('#app');
