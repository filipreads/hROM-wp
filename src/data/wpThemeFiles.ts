export interface WPThemeFile {
  filename: string;
  category: 'core' | 'template' | 'asset' | 'doc';
  description: string;
  code: string;
}

export const WP_THEME_FILES: WPThemeFile[] = [
  {
    filename: 'style.css',
    category: 'core',
    description: 'Hlavní soubor stylů šablony s metadaty WordPressu a CSS proměnnými z loga',
    code: `/*
Theme Name: hROM České Budějovice
Theme URI: https://hromcb.cz
Author: hROM České Budějovice, z.s.
Description: Rychlá, čistá a přístupná samostatná šablona pro spolek hROM CB inspirovaná Slovo21.cz a barvami z loga. Bez závislosti na Elementoru.
Version: 1.0.0
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 8.0
License: GNU General Public License v2 or later
Text Domain: hromcb
*/

:root {
  /* Barevná paleta odvozená z hrom_logo.svg */
  --c-ink: #1a1e24;
  --c-ink-light: #525a66;
  --c-bg: #fdfdfc;
  --c-surface: #ffffff;
  --c-surface-soft: #f6f4ee;
  --c-border: #e6e3da;
  
  --c-cyan: #0cacdb;     /* Romská modrá / nebe */
  --c-yellow: #fac503;   /* Romské slunce / zlatá */
  --c-orange: #ed7503;   /* Akční barva dary/podpora */
  --c-red: #e63312;      /* Kultura a festivaly */
  --c-magenta: #ce2e85;  /* Ženská témata / komunita */
  --c-green: #669538;    /* Příroda, udržitelnost */

  /* Typografie */
  --font-heading: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  --container: 1180px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.06);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.09);
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--c-ink);
  background-color: var(--c-bg);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--c-ink);
  line-height: 1.25;
  margin-top: 0;
  font-weight: 700;
  letter-spacing: -0.015em;
}

p {
  margin-top: 0;
  margin-bottom: 1.2rem;
}

a {
  color: var(--c-cyan);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--c-ink);
}

.site-container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

/* Tlačítka */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  border: none;
  line-height: 1.2;
}

.btn-primary {
  background: var(--c-orange);
  color: #fff;
  box-shadow: 0 4px 14px rgba(237, 117, 3, 0.3);
}

.btn-primary:hover {
  background: #d86400;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(237, 117, 3, 0.45);
}

.btn-secondary {
  background: var(--c-surface-soft);
  color: var(--c-ink);
  border: 1px solid var(--c-border);
}

.btn-secondary:hover {
  background: #ece8dd;
  color: var(--c-ink);
}

.badge {
  display: inline-block;
  background: var(--c-surface-soft);
  color: var(--c-orange);
  font-weight: 700;
  font-size: 0.8rem;
  padding: 4px 14px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(237, 117, 3, 0.25);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Hlavička & Navigace */
.site-header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(253, 253, 252, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--c-border);
  padding: 14px 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--c-ink);
  display: block;
}

.brand-tagline {
  font-size: 0.8rem;
  color: var(--c-ink-light);
  display: block;
}

.main-navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 24px;
  align-items: center;
}

.main-navigation a {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--c-ink);
  padding: 6px 0;
}

.main-navigation a:hover,
.main-navigation .current-menu-item > a {
  color: var(--c-cyan);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--c-ink);
}

/* Hero */
.hero-section {
  padding: 70px 0 60px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 50px;
  align-items: center;
}

.hero-title {
  font-size: clamp(2.3rem, 4vw, 3.6rem);
  letter-spacing: -0.03em;
  margin-bottom: 22px;
}

.hero-title .highlight {
  background: linear-gradient(130deg, var(--c-orange), var(--c-magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-lead {
  font-size: 1.15rem;
  color: var(--c-ink-light);
  margin-bottom: 32px;
  max-width: 540px;
}

/* Pilíře (Slovo 21 koncept) */
.pillars-section {
  padding: 75px 0;
  background: var(--c-surface-soft);
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
}

.section-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 50px;
}

.section-head h2 {
  font-size: 2.3rem;
  margin-bottom: 14px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.pillar-card {
  background: var(--c-surface);
  padding: 34px 26px;
  border-radius: var(--radius-md);
  border-top: 6px solid var(--c-cyan);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
}

.pillar-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.pillar-card:nth-child(2) { border-top-color: var(--c-yellow); }
.pillar-card:nth-child(3) { border-top-color: var(--c-magenta); }
.pillar-card:nth-child(4) { border-top-color: var(--c-green); }

/* Dopad v číslech */
.impact-section {
  padding: 75px 0;
  background: var(--c-ink);
  color: #fff;
  text-align: center;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.impact-item .num {
  font-size: 3.4rem;
  font-family: var(--font-heading);
  font-weight: 800;
  color: var(--c-yellow);
  display: block;
}

/* Patička */
.site-footer {
  background: #111418;
  color: #a4afbd;
  padding: 70px 0 30px;
  border-top: 4px solid var(--c-orange);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 50px;
}

.footer-col h4 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 18px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col a {
  color: #a4afbd;
}

.footer-col a:hover {
  color: #fff;
}

@media (max-width: 991px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .main-navigation { display: none; }
  .menu-toggle { display: block; }
  .footer-grid { grid-template-columns: 1fr; }
}`,
  },
  {
    filename: 'functions.php',
    category: 'core',
    description: 'Registrace šablony, fontů, menu, podpory SVG a odesílání formulářů',
    code: `<?php
/**
 * hROM České Budějovice - Theme Functions
 */

if (!defined('ABSPATH')) {
    exit;
}

function hromcb_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 80,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));

    register_nav_menus(array(
        'primary' => __('Hlavní menu', 'hromcb'),
        'footer'  => __('Patičkové menu', 'hromcb')
    ));
}
add_action('after_setup_theme', 'hromcb_theme_setup');

function hromcb_enqueue_assets() {
    wp_enqueue_style(
        'hromcb-fonts',
        'https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    wp_enqueue_style('hromcb-main', get_stylesheet_uri(), array('hromcb-fonts'), '1.0.0');

    wp_enqueue_script(
        'hromcb-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'hromcb_enqueue_assets');

// Povolení SVG a WebP
function hromcb_mime_types($mimes) {
    $mimes['svg']  = 'image/svg+xml';
    $mimes['webp'] = 'image/webp';
    return $mimes;
}
add_filter('upload_mimes', 'hromcb_mime_types');

// Zpracování kontaktního formuláře s ochranou CSRF nonce
function hromcb_handle_contact_form() {
    if (isset($_POST['hrom_contact_submit'])) {
        if (!isset($_POST['hrom_nonce']) || !wp_verify_nonce($_POST['hrom_nonce'], 'hrom_contact_action')) {
            wp_die('Bezpečnostní kontrola formuláře selhala.');
        }

        $name    = sanitize_text_field($_POST['contact_name'] ?? '');
        $email   = sanitize_email($_POST['contact_email'] ?? '');
        $message = sanitize_textarea_field($_POST['contact_message'] ?? '');

        if (!empty($name) && is_email($email) && !empty($message)) {
            $to      = 'hrom.cb@gmail.com';
            $subject = 'Zpráva z webu hromcb.cz: ' . $name;
            $body    = "Odesílatel: $name\\nE-mail: $email\\n\\nZpráva:\\n$message";
            $headers = array('Content-Type: text/plain; charset=UTF-8', "Reply-To: $name <$email>");

            wp_mail($to, $subject, $body, $headers);
            wp_safe_redirect(add_query_arg('sent', 'success', wp_get_referer()));
            exit;
        } else {
            wp_safe_redirect(add_query_arg('sent', 'error', wp_get_referer()));
            exit;
        }
    }
}
add_action('template_redirect', 'hromcb_handle_contact_form');`,
  },
  {
    filename: 'header.php',
    category: 'template',
    description: 'Hlavička webu, responzivní navigace a tlačítko podpory',
    code: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Horní lišta s kontaktem a sociálními sítěmi -->
<div style="background:#151921; color:#fff; font-size:0.75rem; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.1);">
    <div class="site-container" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
            <span>hROM České Budějovice, z.s. · IČO 08462399</span>
            <span style="opacity:0.4; margin:0 8px;">|</span>
            <a href="mailto:hrom.cb@gmail.com" style="color:#d0d7e2; text-decoration:none;">hrom.cb@gmail.com</a>
        </div>
        <div style="display:flex; gap:8px;">
            <a href="https://www.facebook.com/hromcb" target="_blank" rel="noopener noreferrer" style="color:#fff; background:rgba(255,255,255,0.15); padding:2px 10px; border-radius:9999px; text-decoration:none; font-weight:600;">Facebook</a>
            <a href="https://www.instagram.com/hromcb" target="_blank" rel="noopener noreferrer" style="color:#fff; background:rgba(255,255,255,0.15); padding:2px 10px; border-radius:9999px; text-decoration:none; font-weight:600;">Instagram</a>
        </div>
    </div>
</div>

<header class="site-header">
    <div class="site-container header-inner">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-link" rel="home">
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/hrom_logo.svg'); ?>" 
                 alt="hROM České Budějovice logo" 
                 width="52" 
                 height="52">
            <div class="brand-text">
                <span class="brand-title">hROM České Budějovice</span>
                <span class="brand-tagline">Spolek na podporu romské komunity</span>
            </div>
        </a>

        <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-label="Otevřít navigaci">
            ☰
        </button>

        <nav class="main-navigation" id="mainNavigation" aria-label="Hlavní menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'fallback_cb'    => function() {
                    echo '<ul>
                        <li><a href="' . esc_url(home_url('/o-nas/')) . '">O nás</a></li>
                        <li><a href="' . esc_url(home_url('/aktuality/')) . '">Aktuality</a></li>
                        <li><a href="' . esc_url(home_url('/spoluprace/')) . '">Spolupráce</a></li>
                        <li><a href="' . esc_url(home_url('/dokumenty/')) . '">Dokumenty</a></li>
                        <li><a href="' . esc_url(home_url('/kontakt/')) . '">Kontakt</a></li>
                    </ul>';
                }
            ));
            ?>
        </nav>

        <div class="header-cta">
            <a href="<?php echo esc_url(home_url('/spoluprace/#darci')); ?>" class="btn btn-primary">Podpořte nás</a>
        </div>
    </div>
</header>`,
  },
  {
    filename: 'front-page.php',
    category: 'template',
    description: 'Šablona pro úvodní stranu s mottem, 4 pilíři, čísly a dárcovským boxem',
    code: `<?php
/**
 * Úvodní stránka webu (Front Page)
 */
get_header(); ?>

<section class="hero-section">
    <div class="site-container hero-grid">
        <div class="hero-content">
            <span class="badge">hROM České Budějovice, z.s.</span>
            <h1 class="hero-title">
                Spojujeme zdánlivě <span class="highlight">nespojitelné světy</span> a boříme předsudky.
            </h1>
            <p class="hero-lead">
                Není nám jedno, že žijeme ve světě, kde se lidé posuzují podle vzhledu či původu. V Českých Budějovicích vytváříme bezpečný prostor pro otevřený dialog, vzájemné pochopení a sebevědomou komunitu.
            </p>
            <div style="display:flex; gap:16px; flex-wrap:wrap;">
                <a href="<?php echo esc_url(home_url('/o-nas/')); ?>" class="btn btn-primary">Poznejte náš tým</a>
                <a href="<?php echo esc_url(home_url('/spoluprace/')); ?>" class="btn btn-secondary">Chci pomáhat</a>
            </div>
        </div>

        <div style="border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-lg);">
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/img/hero.jpg'); ?>" alt="Komunitní setkání hROM" width="600" height="420">
        </div>
    </div>
</section>

<!-- 4 Pilíře -->
<section class="pillars-section">
    <div class="site-container">
        <div class="section-head">
            <h2>Čemu se v Českých Budějovicích věnujeme</h2>
            <p>Konkrétní kroky, kterými otevíráme společnost, posilujeme rodiny a podporujeme mladou generaci.</p>
        </div>

        <div class="pillars-grid">
            <article class="pillar-card">
                <h3>Romská komunita</h3>
                <p>Upevňování romské identity, podpora rodin a vytváření bezpečného prostoru pro vzájemné porozumění a rovnocenný dialog ve městě.</p>
            </article>

            <article class="pillar-card">
                <h3>Děti a mládež</h3>
                <p>Pravidelné taneční a hudební aktivity, příměstské tábory a workshopy. Učíme děti respektu, empatii a radosti ze společného tvoření.</p>
            </article>

            <article class="pillar-card">
                <h3>Kultura & EHMK 2028</h3>
                <p>Spolupracujeme na projektu Magic Carpets v rámci programu České Budějovice – Evropské hlavní město kultury 2028.</p>
            </article>

            <article class="pillar-card">
                <h3>Dobrovolnictví</h3>
                <p>Vytváříme stabilní zázemí pro dobrovolníky a dobrovolnice, kteří chtějí věnovat svůj čas a energii smysluplným společenským změnám.</p>
            </article>
        </div>
    </div>
</section>

<!-- Dopad v číslech -->
<section class="impact-section">
    <div class="site-container">
        <h2>Náš dopad v číslech</h2>
        <p>Za každým číslem stojí skutečný lidský příběh a nové přátelství.</p>

        <div class="impact-grid">
            <div class="impact-item">
                <span class="num">100+</span>
                <span class="label">dětí v pohybových a tanečních aktivitách</span>
            </div>
            <div class="impact-item">
                <span class="num">2028</span>
                <span class="label">partner Evropského hlavního města kultury</span>
            </div>
            <div class="impact-item">
                <span class="num">7</span>
                <span class="label">členů kmenového koordinačního týmu</span>
            </div>
            <div class="impact-item">
                <span class="num">100%</span>
                <span class="label">otevřené srdce pro každého bez rozdílu</span>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>`,
  },
  {
    filename: 'page-o-nas.php',
    category: 'template',
    description: 'Šablona pro stránku O nás s autentickými medailonky všech 7 členů týmu',
    code: `<?php
/**
 * Template Name: O nás
 */
get_header(); ?>

<main class="site-container" style="padding: 60px 24px 90px;">
    <header class="section-head">
        <span class="badge">Náš příběh</span>
        <h1>O spolku hROM České Budějovice</h1>
        <p class="hero-lead" style="margin: 0 auto;">
            Tím, co děláme, propojujeme zdánlivě nespojitelné, rozdílné, názorově odlišné světy, komunity a jednotlivce... Není nám jedno, že žijeme ve světě, ve kterém se lidé posuzují na základě toho, jak vypadají.
        </p>
    </header>

    <div class="section-head" style="margin-top:60px;">
        <h2>Lidé v týmu hROM CB</h2>
        <p>Tváře, které stojí za našimi projekty a každodenní prací v terénu.</p>
    </div>

    <!-- Tým 7 medailonků z XML databáze -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:30px;">
        <!-- Jan Horváth -->
        <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
            <div style="padding:24px;">
                <span style="color:var(--c-orange); font-weight:700; font-size:0.85rem; text-transform:uppercase;">Předseda spolku</span>
                <h3 style="font-size:1.4rem; margin:8px 0 12px;">Jan Horváth</h3>
                <p style="color:var(--c-ink-light); font-size:0.95rem;">
                    Smysl své práce vidím ve vytváření prostoru, kde se můžeme bez předsudků poznávat a lépe chápat naše odlišnosti. Věřím, že otevřený dialog pomáhá budovat společnost, kde má každý možnost cítit se bezpečně.
                </p>
            </div>
        </article>

        <!-- Tereza Koutská -->
        <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
            <div style="padding:24px;">
                <span style="color:var(--c-cyan); font-weight:700; font-size:0.85rem; text-transform:uppercase;">Místopředsedkyně</span>
                <h3 style="font-size:1.4rem; margin:8px 0 12px;">Tereza Koutská</h3>
                <p style="color:var(--c-ink-light); font-size:0.95rem;">
                    Společnost je jen tak silná, jak silná je její odpovědnost za nejzranitelnější skupiny obyvatel. Věřím, že vedle sebe mohou žít rozdílní lidé spojení lidstvím.
                </p>
            </div>
        </article>

        <!-- Naděžda Nanárová -->
        <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
            <div style="padding:24px;">
                <span style="color:var(--c-magenta); font-weight:700; font-size:0.85rem; text-transform:uppercase;">Děti a komunity</span>
                <h3 style="font-size:1.4rem; margin:8px 0 12px;">Naděžda Nanárová</h3>
                <p style="color:var(--c-ink-light); font-size:0.95rem;">
                    Vytvářím příležitosti pro společné setkávání a sdílení zkušeností. Od dětství je klíčové učit se respektu, empatii a vnímání rozmanitosti jako přirozené součásti života.
                </p>
            </div>
        </article>

        <!-- Kateřina Sihelníková -->
        <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
            <div style="padding:24px;">
                <span style="color:var(--c-yellow); font-weight:700; font-size:0.85rem; text-transform:uppercase;">Koordinace a provoz</span>
                <h3 style="font-size:1.4rem; margin:8px 0 12px;">Kateřina Sihelníková</h3>
                <p style="color:var(--c-ink-light); font-size:0.95rem;">
                    Propojuji všechny složky spolku a hlídám, aby vše běželo hladce. Každá komunita má svůj potenciál, který pomáháme rozvíjet.
                </p>
            </div>
        </article>

        <!-- Veronika Zvánovcová -->
        <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
            <div style="padding:24px;">
                <span style="color:var(--c-green); font-weight:700; font-size:0.85rem; text-transform:uppercase;">Koordinátorka dobrovolníků</span>
                <h3 style="font-size:1.4rem; margin:8px 0 12px;">Veronika Zvánovcová</h3>
                <p style="color:var(--c-ink-light); font-size:0.95rem;">
                    Vytvářím stabilní a motivovanou základnu dobrovolníků a dobrovolnic, která chápe hluboké poslání dobrovolnické pomoci.
                </p>
            </div>
        </article>

        <!-- Hana Donéeová -->
        <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
            <div style="padding:24px;">
                <span style="color:#1F4E9E; font-weight:700; font-size:0.85rem; text-transform:uppercase;">Správce webu & IT podpora</span>
                <h3 style="font-size:1.4rem; margin:8px 0 12px;">Hana Donéeová</h3>
                <p style="color:var(--c-ink-light); font-size:0.95rem;">
                    Poskytuji technickou podporu správě webu i sítí. Věřím v otevřenou společnost bez předsudků a stigmatizace.
                </p>
            </div>
        </article>

        <!-- Kristýna Mercer -->
        <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
            <div style="padding:24px;">
                <span style="color:var(--c-red); font-weight:700; font-size:0.85rem; text-transform:uppercase;">Sociální sítě & Komunikace</span>
                <h3 style="font-size:1.4rem; margin:8px 0 12px;">Kristýna Mercer</h3>
                <p style="color:var(--c-ink-light); font-size:0.95rem;">
                    Mám ráda pestrost života a lidí. Věřím v sílu lidské pospolitosti a kultury, kterou šířím na sociálních sítích.
                </p>
            </div>
        </article>
    </div>
</main>

<?php get_footer(); ?>`,
  },
  {
    filename: 'page-kontakt.php',
    category: 'template',
    description: 'Šablona pro stránku Kontakt s adresou, IČO 08462399 a funkčním formulářem',
    code: `<?php
/**
 * Template Name: Kontakt
 */
get_header(); ?>

<main class="site-container" style="padding: 60px 24px 90px;">
    <header class="section-head">
        <span class="badge">Spojte se s námi</span>
        <h1>Kontakt</h1>
        <p class="hero-lead" style="margin: 0 auto;">
            Máte dotaz, zájem o spolupráci nebo se chcete zapojit? Napište nám nebo zavolejte.
        </p>
    </header>

    <?php if (isset($_GET['sent']) && $_GET['sent'] === 'success') : ?>
        <div style="background:#e8f5e9; color:#2e7d32; border:1px solid #c8e6c9; padding:18px; border-radius:var(--radius-sm); margin-bottom:30px; text-align:center; font-weight:600;">
            ✓ Děkujeme! Vaše zpráva byla úspěšně odeslána.
        </div>
    <?php endif; ?>

    <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:48px;">
        <div style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); padding:36px;">
            <h2>Údaje o spolku</h2>
            <p><strong>hROM CB z.s.</strong><br>Kvítkovice č.ev. 29<br>373 84 Kvítkovice</p>
            <p><strong>IČO:</strong> 08462399</p>
            <p><strong>E-mail:</strong> <a href="mailto:hrom.cb@gmail.com">hrom.cb@gmail.com</a></p>
            <p><strong>Telefony:</strong><br>
                <a href="tel:+420721305009">+420 721 305 009</a><br>
                <a href="tel:+420605783196">+420 605 783 196</a>
            </p>
        </div>

        <div style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); padding:36px;">
            <h2>Napište nám zprávu</h2>
            <form method="post" action="">
                <?php wp_nonce_field('hrom_contact_action', 'hrom_nonce'); ?>
                <div style="margin-bottom:16px;">
                    <label for="name" style="display:block; font-weight:600; margin-bottom:6px;">Vaše jméno *</label>
                    <input type="text" id="name" name="contact_name" required style="width:100%; padding:12px; border:1px solid var(--c-border); border-radius:var(--radius-sm);">
                </div>
                <div style="margin-bottom:16px;">
                    <label for="email" style="display:block; font-weight:600; margin-bottom:6px;">Váš e-mail *</label>
                    <input type="email" id="email" name="contact_email" required style="width:100%; padding:12px; border:1px solid var(--c-border); border-radius:var(--radius-sm);">
                </div>
                <div style="margin-bottom:20px;">
                    <label for="msg" style="display:block; font-weight:600; margin-bottom:6px;">Zpráva *</label>
                    <textarea id="msg" name="contact_message" rows="5" required style="width:100%; padding:12px; border:1px solid var(--c-border); border-radius:var(--radius-sm);"></textarea>
                </div>
                <button type="submit" name="hrom_contact_submit" class="btn btn-primary" style="width:100%;">Odeslat zprávu</button>
            </form>
        </div>
    </div>
</main>

<?php get_footer(); ?>`,
  },
  {
    filename: 'footer.php',
    category: 'template',
    description: 'Patička webu s kontaktními údaji, IČO a autorskými právy',
    code: `<footer class="site-footer">
    <div class="site-container">
        <div class="footer-grid">
            <div class="footer-col">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                    <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/hrom_logo.svg'); ?>" 
                         alt="hROM" 
                         width="46" 
                         height="46">
                    <span style="font-family:var(--font-heading); color:#fff; font-size:1.2rem; font-weight:800;">hROM CB z.s.</span>
                </div>
                <p style="font-size:0.9rem; line-height:1.6;">
                    Spolek pro podporu romské komunity v Českých Budějovicích. Vytváříme bezpečný prostor pro dialog, sebevědomí a respekt.
                </p>
            </div>

            <div class="footer-col">
                <h4>Organizace</h4>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/o-nas/')); ?>">Náš příběh a tým</a></li>
                    <li><a href="<?php echo esc_url(home_url('/spoluprace/')); ?>">Dobrovolníci a dárci</a></li>
                    <li><a href="<?php echo esc_url(home_url('/dokumenty/')); ?>">Výroční zprávy & SDGs</a></li>
                    <li><a href="<?php echo esc_url(home_url('/aktuality/')); ?>">Aktuality</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Sídlo a IČO</h4>
                <p style="font-size:0.9rem; margin-bottom:8px;">
                    <strong>hROM CB z.s.</strong><br>
                    Kvítkovice č.ev. 29<br>
                    373 84 Kvítkovice
                </p>
                <p style="font-size:0.9rem;">
                    <strong>IČO:</strong> 08462399
                </p>
            </div>

            <div class="footer-col">
                <h4>Kontaktujte nás</h4>
                <p style="font-size:0.9rem; margin-bottom:6px;">
                    ✉ <a href="mailto:hrom.cb@gmail.com">hrom.cb@gmail.com</a>
                </p>
                <p style="font-size:0.9rem; margin-bottom:6px;">
                    📞 <a href="tel:+420721305009">+420 721 305 009</a>
                </p>
                <p style="font-size:0.9rem; margin-bottom:16px;">
                    📞 <a href="tel:+420605783196">+420 605 783 196</a>
                </p>
                <a href="<?php echo esc_url(home_url('/spoluprace/#darci')); ?>" class="btn btn-primary" style="padding: 8px 18px; font-size: 0.85rem;">Darovat a podpořit</a>
            </div>
        </div>

        <div class="footer-bottom">
            <div>
                © <?php echo date('Y'); ?> hROM České Budějovice, z.s. Všechna práva vyhrazena.
            </div>
            <div>
                <a href="<?php echo esc_url(home_url('/zasady-cookies-eu/')); ?>">Zásady cookies</a> |
                <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Ochrana osobních údajů</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>`,
  },
  {
    filename: 'theme.json',
    category: 'core',
    description: 'Nativní definice stylů a barevné palety pro WordPress Block Editor',
    code: `{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        { "name": "Ink", "slug": "ink", "color": "#1a1e24" },
        { "name": "Orange", "slug": "orange", "color": "#ed7503" },
        { "name": "Cyan", "slug": "cyan", "color": "#0cacdb" },
        { "name": "Yellow", "slug": "yellow", "color": "#fac503" },
        { "name": "Red", "slug": "red", "color": "#e63312" },
        { "name": "Magenta", "slug": "magenta", "color": "#ce2e85" },
        { "name": "Green", "slug": "green", "color": "#669538" },
        { "name": "Surface Soft", "slug": "surface-soft", "color": "#f6f4ee" }
      ]
    },
    "layout": {
      "contentSize": "840px",
      "wideSize": "1180px"
    }
  }
}`,
  },
  {
    filename: 'readme.txt',
    category: 'doc',
    description: 'Návod k instalaci šablony do WordPress a deaktivaci Elementoru',
    code: `=== hROM České Budějovice - Čistá WordPress šablona ===
Contributors: hROM České Budějovice, z.s.
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 8.0
License: GPLv2 or later

== POPIS ==
Čistá, samostatná PHP šablona pro web https://hromcb.cz vytvořená na míru
podle vizuální identity z loga (hrom_logo.svg) a designu neziskové organizace slovo21.cz.

Šablona je kompletně nezávislá na těžkých builderech (Astra, Elementor),
díky čemuž dosahuje maximální rychlosti načtení (PageSpeed 95+) a čistého HTML výstupu.

== INSTALACE ==
1. Stáhněte balíček hromcb-theme.zip.
2. Přihlaste se do administrace WordPress (wp-admin).
3. Přejděte do Vzhled -> Šablony -> Přidat novou šablonu -> Nahrát šablonu.
4. Vyberte soubor hromcb-theme.zip a klikněte na "Instalovat".
5. Klikněte na "Aktivovat".

== NASTAVENÍ STRÁNEK ==
1. V Nastavení -> Zobrazování:
   - Úvodní stránka: Vyberte statickou stránku "Domů" (přiřadí se front-page.php)
   - Stránka příspěvků: Vyberte "Aktuality"
2. V sekci Stránky přiřaďte šablony:
   - "O nás" -> Šablona stránky: "O nás" (page-o-nas.php)
   - "Spolupráce" -> Šablona stránky: "Chci spolupracovat" (page-spoluprace.php)
   - "Dokumenty" -> Šablona stránky: "Dokumenty" (page-dokumenty.php)
   - "Kontakt" -> Šablona stránky: "Kontakt" (page-kontakt.php)

== ODSTRANĚNÍ ELEMENTORU ==
Po aktivaci této šablony můžete v sekci Pluginy zcela DEAKTIVOVAT a SMAZAT plugin Elementor.
Web již nepotřebuje žádné externí závislosti a poběží bezpečně a rychle.`,
  },
];
