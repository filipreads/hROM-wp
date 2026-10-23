import JSZip from 'jszip';
import { WP_THEME_FILES } from '../data/wpThemeFiles';

export async function downloadWordPressThemeZip(): Promise<void> {
  const zip = new JSZip();
  const folder = zip.folder('hromcb');

  if (!folder) {
    throw new Error('Nelze vytvořit složku v ZIP archivu.');
  }

  // Add all theme files
  WP_THEME_FILES.forEach((file) => {
    folder.file(file.filename, file.code);
  });

  // Additional WordPress files
  folder.file('single.php', `<?php
/**
 * Detail příspěvku (Single Post)
 */
get_header(); ?>

<main class="site-container" style="padding: 60px 24px 90px; max-width: 820px;">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article>
            <header style="margin-bottom: 24px;">
                <span class="badge"><?php echo get_the_date('j. F Y'); ?></span>
                <h1 style="font-size: clamp(2rem, 3.5vw, 2.8rem); margin-bottom: 16px;"><?php the_title(); ?></h1>
            </header>

            <?php if (has_post_thumbnail()) : ?>
                <div style="margin-bottom: 32px; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-md);">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <div class="entry-content" style="font-size: 1.05rem; line-height: 1.8;">
                <?php the_content(); ?>
            </div>

            <footer style="margin-top: 50px; padding-top: 24px; border-top: 1px solid var(--c-border);">
                <a href="<?php echo esc_url(home_url('/aktuality/')); ?>" class="btn btn-secondary">&larr; Zpět na aktuality</a>
            </footer>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>`);

  folder.file('page.php', `<?php
/**
 * Univerzální šablona stránky (Page)
 */
get_header(); ?>

<main class="site-container" style="padding: 60px 24px 90px; max-width: 840px;">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article>
            <header style="margin-bottom: 24px;">
                <h1 style="font-size: clamp(2rem, 3.5vw, 2.8rem); margin-bottom: 16px;"><?php the_title(); ?></h1>
            </header>

            <div class="entry-content" style="font-size: 1.05rem; line-height: 1.8;">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>`);

  folder.file('index.php', `<?php
/**
 * Archiv aktualit / blog
 */
get_header(); ?>

<main class="site-container" style="padding: 60px 24px 90px;">
    <header class="section-head">
        <span class="badge">Novinky</span>
        <h1>Aktuality ze spolku hROM</h1>
        <p class="hero-lead" style="margin: 0 auto;">Přečtěte si o našich uplynulých i chystaných akcích v Českých Budějovicích.</p>
    </header>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:30px;">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article style="background:#fff; border:1px solid var(--c-border); border-radius:var(--radius-md); overflow:hidden;">
                <?php if (has_post_thumbnail()) : ?>
                    <div style="height:220px; overflow:hidden;">
                        <?php the_post_thumbnail('medium_large', array('style' => 'width:100%; height:100%; object-fit:cover;')); ?>
                    </div>
                <?php endif; ?>
                <div style="padding:24px;">
                    <span style="font-size:0.8rem; font-weight:700; color:var(--c-cyan);"><?php echo get_the_date('j. F Y'); ?></span>
                    <h2 style="font-size:1.3rem; margin:8px 0 12px;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div style="color:var(--c-ink-light); font-size:0.95rem; margin-bottom:16px;"><?php the_excerpt(); ?></div>
                    <a href="<?php the_permalink(); ?>" style="color:var(--c-cyan); font-weight:700;">Číst více &rarr;</a>
                </div>
            </article>
        <?php endwhile; endif; ?>
    </div>
</main>

<?php get_footer(); ?>`);

  folder.file('404.php', `<?php
/**
 * Chybová stránka 404
 */
get_header(); ?>

<main class="site-container" style="padding: 100px 24px; text-align: center;">
    <span class="badge">Chyba 404</span>
    <h1 style="font-size: 3rem; margin-bottom: 16px;">Stránka nebyla nalezena</h1>
    <p class="hero-lead" style="margin: 0 auto 32px;">Omlouváme se, ale požadovaná stránka neexistuje nebo byla přesunuta.</p>
    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">Zpět na úvodní stranu</a>
</main>

<?php get_footer(); ?>`);

  // Assets subfolders
  const assetsFolder = folder.folder('assets');
  if (assetsFolder) {
    assetsFolder.file('hrom_logo.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 120" fill="none">
  <g transform="translate(60, 60)">
    <circle cx="0" cy="0" r="14" fill="#1E2229" />
    <circle cx="0" cy="0" r="7" fill="#FDFDFC" />
    <path d="M 0,-16 L 0,-48 A 48 48 0 0 1 24,-41.5 L 8,-13.8 A 16 16 0 0 0 0,-16 Z" fill="#FAC503" />
    <path d="M 8,-13.8 L 24,-41.5 A 48 48 0 0 1 41.5,-24 L 13.8,-8 A 16 16 0 0 0 8,-13.8 Z" fill="#FFB703" />
    <path d="M 13.8,-8 L 41.5,-24 A 48 48 0 0 1 48,0 L 16,0 A 16 16 0 0 0 13.8,-8 Z" fill="#ED7503" />
    <path d="M 16,0 L 48,0 A 48 48 0 0 1 41.5,24 L 13.8,8 A 16 16 0 0 0 16,0 Z" fill="#E63312" />
    <path d="M 13.8,8 L 41.5,24 A 48 48 0 0 1 24,41.5 L 8,13.8 A 16 16 0 0 0 13.8,8 Z" fill="#CE2E85" />
    <path d="M 8,13.8 L 24,41.5 A 48 48 0 0 1 0,48 L 0,16 A 16 16 0 0 0 8,13.8 Z" fill="#8E44AD" />
    <path d="M 0,16 L 0,48 A 48 48 0 0 1 -24,41.5 L -8,13.8 A 16 16 0 0 0 0,16 Z" fill="#2E5BFF" />
    <path d="M -8,13.8 L -24,41.5 A 48 48 0 0 1 -41.5,24 L -13.8,8 A 16 16 0 0 0 -8,13.8 Z" fill="#1F4E9E" />
    <path d="M -13.8,8 L -41.5,24 A 48 48 0 0 1 -48,0 L -16,0 A 16 16 0 0 0 -13.8,8 Z" fill="#0CACDB" />
    <path d="M -16,0 L -48,0 A 48 48 0 0 1 -41.5,-24 L -13.8,-8 A 16 16 0 0 0 -16,0 Z" fill="#16A085" />
    <path d="M -13.8,-8 L -41.5,-24 A 48 48 0 0 1 -24,-41.5 L -8,-13.8 A 16 16 0 0 0 -13.8,-8 Z" fill="#669538" />
    <path d="M -8,-13.8 L -24,-41.5 A 48 48 0 0 1 0,-48 L 0,-16 A 16 16 0 0 0 -8,-13.8 Z" fill="#84CC16" />
    <circle cx="0" cy="0" r="48" stroke="#1E2229" stroke-width="2" fill="none" opacity="0.15" />
  </g>
  <g transform="translate(130, 26)">
    <text x="0" y="44" font-family="'Outfit', sans-serif" font-size="46" fill="#1E2229">
      <tspan fill="#ED7503" font-weight="700">h</tspan><tspan font-weight="900" fill="#1E2229">ROM</tspan>
    </text>
    <text x="3" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#525A66" letter-spacing="1.5">
      ČESKÉ BUDĚJOVICE<tspan fill="#0CACDB">, z.s.</tspan>
    </text>
  </g>
</svg>`);

    const jsFolder = assetsFolder.folder('js');
    if (jsFolder) {
      jsFolder.file('main.js', `document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNavigation');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen);
            toggle.textContent = isOpen ? '✕' : '☰';
        });
    }
});`);
    }
  }

  // Generate ZIP blob and trigger browser download
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'hromcb-wordpress-theme.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
