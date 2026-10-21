const slides = [
  {
    id: 'cover',
    no: '00',
    layout: 'a',
    kicker: 'ก.ค. – ก.ย. 2026',
    title: 'นำเสนอ\nผลงาน Q3',
    sub: 'Vinai Developer',
    name: 'Sutthiphong Raiphon',
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
          'ลูกค้ารอใช้สัปดาห์ถัดไป',
          'เหลือเวลาทำจริง 10 วัน',
          'ทั้งโมดูล ทั้งหน้าจอและหลังบ้าน',
          'ทำสองฝั่งไปพร้อมกัน',
          'ใช้ชิ้นส่วนเดิมของทีม',
          'แก้เคสที่ลูกค้าเจอจริงก่อน',
        ],
      },
      {
        heading: 'Inspection Batch',
        items: [
          'รับความต้องการจากลูกค้าโดยตรง',
          'ลูกค้าใช้งานจริงครั้งแรก ๆ ของ Vinai',
          'กดดันคนละแบบ แต่สนุก',
          'หวังให้ลูกค้าพอใจกับระบบ',
        ],
      },
    ],
  },
  {
    id: 'time',
    no: '02',
    layout: 'a',
    kicker: 'งานที่เสียเวลามากที่สุด',
    title: 'Merge &\nConflict',
    sub: '(การรวมโค้ด)',
    columns: [
      {
        heading: 'เกิดอะไรขึ้น',
        items: [
          'รวมโค้ดทำให้ล่าช้า',
          'Dev หลายคน โค้ดตกหล่นบ่อย',
          'Tester ต้องเทสซ้ำ',
          'โค้ด Management Review หาย ต้องกู้คืน',
          'แก้ UI ก่อนตกลงแนวทาง จนต้องย้อนกลับ',
        ],
      },
      {
        heading: 'จะไม่ให้เกิดซ้ำ',
        items: [
          'ตกลงแนวทางก่อนปรับโค้ดหลายไฟล์',
          'แบ่งงานชิ้นเล็ก ส่งเข้าโค้ดหลักเร็วขึ้น',
          'ตรวจความครบของโค้ดหลังรวมทุกครั้ง',
          'ใช้เครื่องมือรวมไฟล์หลายภาษาอัตโนมัติ',
          'จองเลขลำดับฐานข้อมูลก่อนเริ่ม',
        ],
      },
    ],
  },
  {
    id: 'growth',
    no: '03',
    layout: 'a',
    kicker: 'เก่งขึ้นไหม',
    title: 'พัฒนาขึ้น',
    columns: [
      {
        heading: 'ทำ Full-stack ได้ดีขึ้น',
        items: [
          'ทำฟีเจอร์หลักหลายอัน',
          'กลับไปแก้สิ่งที่เคยทำไม่ได้',
          'เมื่อก่อนรอ backend ครึ่งวัน',
          'ตอนนี้ทำเอง ไม่เกิน 1 ชั่วโมง',
        ],
      },
      {
        heading: 'ที่เห็นเพิ่ม',
        items: [
          'งานคล่องตัว พี่ ๆ วางใจ',
          'ช่วยงานฝั่งลูกค้าได้มากขึ้น',
          'คุยกับลูกค้าโดยตรงครั้งแรก',
          'ส่งมอบ 4 ฟัีเจอร์ใหญ่',
          'ทำชิ้นส่วนหน้าจอกลางให้ทีม',
        ],
      },
    ],
    note: 'ต่อเนื่อง Q4 — แชท AI น้องวิ )',
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
