/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PrototypeBar, DeviceType, ThemeCustomizerSettings } from './components/PrototypeBar';
import { DeviceFrame } from './components/DeviceFrame';
import { TemplateCodeInspector } from './components/TemplateCodeInspector';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CollaborationPage } from './pages/CollaborationPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { WordPressThemeViewer } from './components/WordPressThemeViewer';
import { ArticleModal } from './components/ArticleModal';
import { Article } from './data/newsData';
import { downloadWordPressThemeZip } from './utils/zipGenerator';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('domu');
  const [isWpMode, setIsWpMode] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Prototype Controls
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [showCodeSplit, setShowCodeSplit] = useState<boolean>(false);
  const [showCustomizer, setShowCustomizer] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const [settings, setSettings] = useState<ThemeCustomizerSettings>({
    accentColor: '#ED7503',
    borderRadius: 'md',
    stickyHeader: true,
  });

  const handleUpdateSettings = (newSettings: Partial<ThemeCustomizerSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleDownloadZip = async () => {
    setIsDownloading(true);
    try {
      await downloadWordPressThemeZip();
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleNavigate = (tab: string) => {
    if (tab === 'darci') {
      if (currentTab !== 'domu') {
        setCurrentTab('domu');
      }
      setTimeout(() => {
        const el = document.getElementById('darci');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFC] text-[#1A1E24] selection:bg-[#ED7503]/20 selection:text-[#ED7503]">
      {/* Top Prototype Controls Ribbon */}
      <PrototypeBar
        device={device}
        onDeviceChange={setDevice}
        currentTab={currentTab}
        onNavigate={handleNavigate}
        showCodeSplit={showCodeSplit}
        onToggleCodeSplit={() => setShowCodeSplit(!showCodeSplit)}
        showCustomizer={showCustomizer}
        onToggleCustomizer={() => setShowCustomizer(!showCustomizer)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onDownloadZip={handleDownloadZip}
        isDownloading={isDownloading}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main Workspace: Split Preview & Optional Code Inspector */}
      <div className="flex-1 flex overflow-hidden">
        {/* Live Website Preview (Wrapped in Device Frame if Mobile/Tablet) */}
        <div className="flex-1 overflow-y-auto">
          <DeviceFrame device={device}>
            <div className="min-h-screen flex flex-col bg-[#FDFDFC]">
              {/* Site Header */}
              <Header
                currentTab={currentTab}
                onNavigate={handleNavigate}
                isWpMode={isWpMode}
                onToggleWpMode={() => {
                  setIsWpMode(!isWpMode);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* Page Contents */}
              <main className="flex-1">
                {isWpMode ? (
                  <WordPressThemeViewer />
                ) : (
                  <>
                    {currentTab === 'domu' && (
                      <HomePage
                        onNavigate={handleNavigate}
                        onOpenArticle={handleOpenArticle}
                      />
                    )}
                    {currentTab === 'o-nas' && <AboutPage />}
                    {currentTab === 'projekty' && <ProjectsPage onNavigate={handleNavigate} />}
                    {currentTab === 'spoluprace' && <CollaborationPage />}
                    {currentTab === 'dokumenty' && <DocumentsPage />}
                    {currentTab === 'aktuality' && <NewsPage onOpenArticle={handleOpenArticle} />}
                    {currentTab === 'kontakt' && <ContactPage />}
                  </>
                )}
              </main>

              {/* Site Footer */}
              <Footer
                onNavigate={handleNavigate}
                onOpenWpViewer={() => {
                  setIsWpMode(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          </DeviceFrame>
        </div>

        {/* Side-by-side PHP Code Inspector */}
        {showCodeSplit && (
          <TemplateCodeInspector
            currentTab={currentTab}
            onClose={() => setShowCodeSplit(false)}
          />
        )}
      </div>

      {/* Article Reader Modal */}
      <ArticleModal article={activeArticle} onClose={handleCloseArticle} />
    </div>
  );
}
