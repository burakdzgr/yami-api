# PornYami - Statik Sayfalar Dokümantasyonu

## 📄 Oluşturulan Sayfalar

Tüm statik sayfalar Nuxt/Tailwind estetiğine sadık kalınarak oluşturulmuştur.

### 1. Privacy Policy (Gizlilik Politikası)
**Route:** `/privacy-policy`  
**Dosya:** `src/pages/PrivacyPolicy.jsx`

**İçerik:**
- Topladığımız Bilgiler (Database icon)
- Bilgilerinizi Nasıl Kullanıyoruz (Lock icon)
- Veri Güvenliği (Shield icon)
- Üçüncü Taraf Paylaşımı (Eye icon)
- Çerezler ve Takip Teknolojileri
- Kullanıcı Hakları (GDPR/KVKK)
- İletişim bilgileri

**Özellikler:**
- Glass card tasarım
- Gradient icon containers
- Smooth scroll animations
- "Ana Sayfaya Dön" linki
- CTA section

---

### 2. Terms of Service (Kullanım Şartları)
**Route:** `/terms`  
**Dosya:** `src/pages/Terms.jsx`

**İçerik:**
- Hizmet Kullanım Koşulları (FileText icon)
- Kullanım Sınırları (Scale icon)
- Yasaklanan Kullanımlar (AlertCircle icon)
- Hesap Askıya Alma (Ban icon)
- Fikri Mülkiyet
- Sorumluluk Reddi
- Değişiklikler
- İletişim

**Özellikler:**
- Nuxt-style glass cards
- Icon-based sections
- Bullet point lists
- Legal compliance content

---

### 3. DMCA (Telif Hakkı Bildirimi)
**Route:** `/dmca`  
**Dosya:** `src/pages/DMCA.jsx`

**İçerik:**
- Telif Hakkı İhlali Bildirimi (FileWarning icon)
- 6 adımlı bildirim süreci
- Bildirim Süreci (Send icon)
- Karşı Bildirim prosedürü
- DMCA İletişim (Mail icon)
- Önemli uyarılar

**Özellikler:**
- Numbered steps with orange badges
- Highlighted contact section
- Warning boxes
- Email template suggestions

---

### 4. Cookie Policy (Çerez Politikası)
**Route:** `/cookie-policy`  
**Dosya:** `src/pages/CookiePolicy.jsx`

**İçerik:**
- Çerez Nedir? açıklaması
- Zorunlu Çerezler (Shield icon) - Devre dışı bırakılamaz
- Analitik Çerezler (BarChart3 icon) - Devre dışı bırakılabilir
- İşlevsel Çerezler (Settings icon) - Devre dışı bırakılabilir
- Üçüncü Taraf Çerezleri (Google Analytics, Cloudflare, Stripe)
- Çerez Tercihlerini Yönetme
- Daha Fazla Bilgi

**Özellikler:**
- Cookie type badges (Zorunlu/Devre Dışı Bırakılabilir)
- Example lists for each cookie type
- Cookie preferences management section
- Third-party cookie disclosure

---

### 5. Support / Help Center (Destek Merkezi)
**Route:** `/support`  
**Dosya:** `src/pages/Support.jsx`

**İçerik:**
- Arama çubuğu (Search functionality)
- Destek Kanalları:
  - Discord Community (En Hızlı)
  - E-posta Desteği (24-48 saat)
  - Dokümantasyon (Self-Service)
- Sık Sorulan Sorular (8 adet FAQ)
  - Accordion style
  - Arama ile filtreleme
- İletişim Formu
  - İsim, E-posta, Konu, Mesaj
  - Form validation ready
- Ek Kaynaklar

**Özellikler:**
- Interactive search bar
- Accordion FAQ system
- Support channel cards with badges
- Contact form
- Real-time FAQ filtering

---

## 🎨 Tasarım Özellikleri

Tüm sayfalar aşağıdaki ortak özelliklere sahiptir:

### Visual Elements
- **Glass Cards**: `backdrop-blur-xl` ile glassmorphism
- **Gradient Icons**: Orange gradient background containers
- **Smooth Animations**: Framer Motion scroll triggers
- **Consistent Spacing**: 32px sections, 20px margins
- **Typography**: Inter font, bold headlines

### Navigation
- **Back Button**: Her sayfada "Ana Sayfaya Dön" linki
- **Section Badges**: Her sayfanın başında icon + başlık badge
- **Footer Links**: Tüm sayfalar footer'dan erişilebilir

### Color Scheme
- Background: `#020420` (Nuxt Dark)
- Primary: `#FF8C00` (Orange)
- Text: White/Gray-400
- Borders: `rgba(255, 255, 255, 0.1)`

### Animations
- Scroll-triggered fade-in
- Staggered delays (0.1s increments)
- Hover effects on cards
- Smooth transitions (300-500ms)

---

## 🔗 Routing Sistemi

### React Router Implementation

**main.jsx:**
```jsx
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
  <App />
</BrowserRouter>
```

**App.jsx:**
```jsx
import { Routes, Route, useLocation } from 'react-router-dom'

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/dmca" element={<DMCA />} />
  <Route path="/cookie-policy" element={<CookiePolicy />} />
  <Route path="/support" element={<Support />} />
</Routes>
```

### Footer Links

Footer'daki tüm linkler güncellenmiştir:

**Legal Section:**
- Privacy Policy → `/privacy-policy`
- Terms of Service → `/terms`
- DMCA → `/dmca`
- Cookie Policy → `/cookie-policy`

**Support Section:**
- Help Center → `/support`
- Contact Us → `/support`
- Report Issue → `/support`

---

## 📱 Responsive Design

Tüm sayfalar mobil uyumludur:
- Mobile-first approach
- Breakpoints: sm, md, lg
- Flexible grid layouts
- Touch-friendly buttons
- Readable typography on all devices

---

## 🚀 Kullanım

### Development
```bash
npm run dev
```

### Sayfalara Erişim
- Ana Sayfa: http://localhost:3000/
- Gizlilik Politikası: http://localhost:3000/privacy-policy
- Kullanım Şartları: http://localhost:3000/terms
- DMCA: http://localhost:3000/dmca
- Çerez Politikası: http://localhost:3000/cookie-policy
- Destek: http://localhost:3000/support

### Production Build
```bash
npm run build
npm run preview
```

---

## 📊 Sayfa Yapısı

Her sayfa aşağıdaki yapıyı takip eder:

```jsx
<div className="min-h-screen bg-pornyami-dark">
  {/* Header Spacer */}
  <div className="h-20" />

  {/* Hero Section */}
  <section className="relative py-20 px-6 lg:px-8">
    {/* Badge */}
    {/* Title */}
    {/* Description */}
  </section>

  {/* Content Sections */}
  <section className="py-16 px-6 lg:px-8">
    {/* Glass Cards */}
  </section>

  {/* CTA Section */}
  <section className="py-16 px-6 lg:px-8">
    {/* Call to Action */}
  </section>
</div>
```

---

## ✅ Tamamlanan Özellikler

- [x] Privacy Policy sayfası
- [x] Terms of Service sayfası
- [x] DMCA sayfası
- [x] Cookie Policy sayfası
- [x] Support/Help Center sayfası
- [x] React Router entegrasyonu
- [x] Footer link güncellemeleri
- [x] Nuxt/Tailwind estetiği
- [x] Responsive design
- [x] Framer Motion animations
- [x] Glass card components
- [x] Icon-based sections
- [x] Back navigation
- [x] CTA sections

---

## 🎯 SEO Optimizasyonu

Her sayfa için meta tags eklenebilir:

```jsx
<Helmet>
  <title>Privacy Policy - PornYami</title>
  <meta name="description" content="..." />
</Helmet>
```

---

## 📝 İçerik Güncelleme

Sayfa içeriklerini güncellemek için ilgili dosyaları düzenleyin:
- `src/pages/PrivacyPolicy.jsx`
- `src/pages/Terms.jsx`
- `src/pages/DMCA.jsx`
- `src/pages/CookiePolicy.jsx`
- `src/pages/Support.jsx`

Her dosya modüler yapıda olduğu için kolayca özelleştirilebilir.

---

**Oluşturulma Tarihi:** 16 Mart 2026  
**Versiyon:** 1.0.0  
**Tasarım Sistemi:** Nuxt/Tailwind Aesthetic
