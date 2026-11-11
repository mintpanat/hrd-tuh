// Service worker แบบเบาที่สุด: ทำให้ติดตั้งเป็นแอปได้ และไม่แคชหน้าระบบ (ข้อมูลต้องสดเสมอ)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* ปล่อยผ่านเครือข่ายตามปกติ */ });
