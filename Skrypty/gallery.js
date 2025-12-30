/**
 * gallery.js - Logic for Gallery page (Folders, Lightbox, Video)
 */

document.addEventListener('DOMContentLoaded', function () {
    // Gallery Data
    const folders = {
        'madcity-podejrzane': {
            title: 'MadCity - Podejrzane Rzeczy (2022)',
            images: [
                { src: 'Obrazy/Madcity - Podejrzane rzeczy/RobloxScreenShot20230714_211806212.png' },
                { src: 'Obrazy/Madcity - Podejrzane rzeczy/RobloxScreenShot20230714_211858060.png' },
                { src: 'Obrazy/Madcity - Podejrzane rzeczy/RobloxScreenShot20230714_212000867.png' },
                { src: 'Obrazy/Madcity - Podejrzane rzeczy/RobloxScreenShot20230714_212034843.png' },
                { src: 'Obrazy/Madcity - Podejrzane rzeczy/RobloxScreenShot20230714_212414816.png' },
                { src: 'Obrazy/Madcity - Podejrzane rzeczy/Zrzut_ekranu_2023-07-14_212310.png' }
            ],
            sort: 'date'
        },
        'madcity-archiwum': {
            title: 'MadCity - Archwium (2022-20XX)',
            images: [
                { src: 'Obrazy/Madcity - Archiwum/image.png' },
                { src: 'Obrazy/Madcity - Archiwum/image1.png' },
                { src: 'Obrazy/Madcity - Archiwum/image2.png' },
                { src: 'Obrazy/Madcity - Archiwum/image3.png' },
                { src: 'Obrazy/Madcity - Archiwum/image4.png' },
                { src: 'Obrazy/Madcity - Archiwum/image5.png' },
                { src: 'Obrazy/Madcity - Archiwum/image6.png' },
                { src: 'Obrazy/Madcity - Archiwum/image7.png' },
                { src: 'Obrazy/Madcity - Archiwum/image8.png' },
                { src: 'Obrazy/Madcity - Archiwum/image9.png' },
                { src: 'Obrazy/Madcity - Archiwum/image10.png' },
                { src: 'Obrazy/Madcity - Archiwum/image11.png' },
                { src: 'Obrazy/Madcity - Archiwum/image13.png' },
                { src: 'Obrazy/Madcity - Archiwum/RobloxScreenShot20230714_135733057.png' },
                { src: 'Obrazy/Madcity - Archiwum/Screenshot_2025-01-26-21-59-41-83_572064f74bd5f9fa804b05334aa4f912.jpg' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-09-15_204344.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-09-15_205447.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-10-01_212136.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-12-01_223348.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-12-01_223704.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-12-01_224408.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-12-01_231633.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-12-01_231641.png' },
                { src: 'Obrazy/Madcity - Archiwum/Zrzut_ekranu_2023-12-01_231654.png' },

            ],
            sort: 'date'
        },
        'pojebane-i-itd-akcje-w-war-tycoon': {
            title: 'War tycoon pojebane akcje i itd (2025)',
            images: [
                // Example placeholders for now as none were in original
            ]
        }
    };

    const openBtns = document.querySelectorAll('.open-folder-btn');
    const mediaBtns = document.querySelectorAll('.open-folder-media-btn');
    const modal = document.getElementById('subgallery-modal');
    const modalTitle = document.getElementById('subgallery-title');
    const modalImages = document.getElementById('subgallery-images');
    const modalClose = document.getElementById('subgallery-close');
    const imgLightbox = document.getElementById('img-lightbox');
    const imgLightboxImg = document.getElementById('img-lightbox-img');
    const imgLightboxClose = document.getElementById('img-lightbox-close');

    let currentFolder = null;
    let currentImgIndex = 0;

    function renderSubgallery(folderKey) {
        const folder = folders[folderKey];
        if (!folder) return;
        modalTitle.textContent = folder.title;
        modalImages.innerHTML = '';
        let images = [...folder.images];
        if (folder.sort === 'date') {
            images.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
        } else if (folder.sort === 'name') {
            images.sort((a, b) => (a.alt || '').localeCompare(b.alt || ''));
        }

        images.forEach((media, idx) => {
            let el;
            if (media.video) {
                el = document.createElement('video');
                el.src = media.video;
                el.className = 'subgallery-video';
                el.controls = true;
                el.alt = media.alt || '';
                el.title = media.alt || '';
                el.style.cursor = 'pointer';
                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    openVideoLightbox(folderKey, idx, images);
                });
            } else if (media.videoUrl) {
                // YouTube / external
                el = document.createElement('div');
                el.className = 'subgallery-video-item';
                const ytId = extractYouTubeID(media.videoUrl);
                const thumb = document.createElement('img');
                thumb.className = 'subgallery-img';
                if (ytId) {
                    thumb.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
                } else if (media.thumb) {
                    thumb.src = media.thumb;
                } else {
                    thumb.src = ''; // Fallback
                }
                thumb.alt = media.alt || '';
                thumb.title = media.alt || '';
                thumb.loading = 'lazy';
                thumb.style.cursor = 'pointer';
                el.appendChild(thumb);
                el.addEventListener('click', function () {
                    openIframeModal(media.videoUrl, media.alt || '');
                });
            } else if (media.src) {
                el = document.createElement('img');
                el.src = media.src;
                el.alt = media.alt || '';
                el.className = 'subgallery-img';
                el.style.cursor = 'zoom-in';
                el.loading = 'lazy';
                el.addEventListener('click', function () {
                    openLightbox(folderKey, idx, images);
                });
                if (media.tags) {
                    el.title = media.tags.join(' ');
                }
            }
            if (el) modalImages.appendChild(el);
        });
    }

    // --- VIDEO LIGHTBOX ---
    const videoLightbox = document.getElementById('video-lightbox');
    const videoLightboxVideo = document.getElementById('video-lightbox-video');
    const videoLightboxClose = document.getElementById('video-lightbox-close');
    const videoLightboxCaption = document.getElementById('video-lightbox-caption');
    const videoLightboxFullscreen = document.getElementById('video-lightbox-fullscreen');
    let currentVideoIdx = 0;
    let currentVideoFolder = null;
    let currentVideoList = [];

    function openVideoLightbox(folderKey, idx, videosArr) {
        currentVideoFolder = folderKey;
        currentVideoIdx = idx;
        currentVideoList = videosArr;
        const videoObj = videosArr[idx];
        videoLightboxVideo.src = videoObj.video;
        videoLightboxVideo.currentTime = 0;
        videoLightboxVideo.play();
        videoLightboxCaption.textContent = videoObj.alt || '';
        videoLightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    if (videoLightboxClose) {
        videoLightboxClose.addEventListener('click', function () {
            videoLightbox.style.display = 'none';
            videoLightboxVideo.pause();
            videoLightboxVideo.src = '';
            document.body.style.overflow = '';
        });
    }

    if (videoLightbox) {
        videoLightbox.addEventListener('click', function (e) {
            if (e.target === videoLightbox) {
                videoLightbox.style.display = 'none';
                videoLightboxVideo.pause();
                videoLightboxVideo.src = '';
                document.body.style.overflow = '';
            }
        });
    }

    if (videoLightboxFullscreen) {
        videoLightboxFullscreen.addEventListener('click', function () {
            if (videoLightboxVideo.requestFullscreen) {
                videoLightboxVideo.requestFullscreen();
            } else if (videoLightboxVideo.webkitRequestFullscreen) {
                videoLightboxVideo.webkitRequestFullscreen();
            } else if (videoLightboxVideo.msRequestFullscreen) {
                videoLightboxVideo.msRequestFullscreen();
            }
        });
    }

    function openLightbox(folderKey, idx, imagesArr) {
        currentFolder = folderKey;
        currentImgIndex = idx;
        const folder = folders[folderKey];
        let images = imagesArr || folder.images;
        if (folder.sort === 'date') {
            images = [...images].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
        } else if (folder.sort === 'name') {
            images = [...images].sort((a, b) => (a.alt || '').localeCompare(b.alt || ''));
        }
        const img = images[idx];
        imgLightboxImg.src = img.src;
        imgLightboxImg.alt = img.alt || '';
        document.getElementById('img-lightbox-caption').textContent = img.caption || '';
        imgLightboxImg.setAttribute('data-tags', img.tags ? img.tags.join(' ') : '');
        imgLightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => { imgLightboxClose.focus(); }, 100);
    }

    openBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const folderKey = this.parentElement.getAttribute('data-folder');
            renderSubgallery(folderKey);
            modal.style.display = 'flex';
        });
    });

    mediaBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const folderKey = this.parentElement.getAttribute('data-folder');
            renderSubgallery(folderKey);
            modal.style.display = 'flex';
        });
    });

    if (imgLightboxClose) {
        imgLightboxClose.addEventListener('click', function () {
            imgLightbox.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (imgLightbox) {
        imgLightbox.addEventListener('click', function (e) {
            if (e.target === imgLightbox) {
                imgLightbox.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Global Key Events
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (imgLightbox && imgLightbox.style.display === 'flex') {
                imgLightbox.style.display = 'none';
                document.body.style.overflow = '';
            }
            if (videoLightbox && videoLightbox.style.display === 'flex') {
                videoLightbox.style.display = 'none';
                videoLightboxVideo.pause();
                videoLightboxVideo.src = '';
                document.body.style.overflow = '';
            }
            if (modal && modal.style.display === 'flex') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    });

    const prevBtn = document.getElementById('img-lightbox-prev');
    const nextBtn = document.getElementById('img-lightbox-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (currentFolder !== null) {
                const folder = folders[currentFolder];
                let images = [...folder.images];
                if (folder.sort === 'date') {
                    images.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
                } else if (folder.sort === 'name') {
                    images.sort((a, b) => (a.alt || '').localeCompare(b.alt || ''));
                }
                currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
                openLightbox(currentFolder, currentImgIndex, images);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (currentFolder !== null) {
                const folder = folders[currentFolder];
                let images = [...folder.images];
                if (folder.sort === 'date') {
                    images.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
                } else if (folder.sort === 'name') {
                    images.sort((a, b) => (a.alt || '').localeCompare(b.alt || ''));
                }
                currentImgIndex = (currentImgIndex + 1) % images.length;
                openLightbox(currentFolder, currentImgIndex, images);
            }
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // --- Handling IFRAME close logic ---
    const iframeClose = document.getElementById('video-lightbox-close-iframe');
    const iframeContainer = document.getElementById('video-iframe-container');
    const iframe = document.getElementById('video-lightbox-iframe');

    if (iframeClose) {
        iframeClose.addEventListener('click', function () {
            if (iframe) iframe.src = '';
            if (iframeContainer) iframeContainer.style.display = 'none';
            // Also hide the video lightbox wrapper just in case (as implemented in html)
            if (videoLightbox) videoLightbox.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (iframeContainer) {
        iframeContainer.addEventListener('click', function (e) {
            if (e.target === iframeContainer) {
                if (iframe) iframe.src = '';
                iframeContainer.style.display = 'none';
                if (videoLightbox) videoLightbox.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
});

// Helper Functions (exposed if needed or kept local)
function extractYouTubeID(url) {
    if (!url) return null;
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]{11})/,
        /(?:https?:\/\/)?youtu\.be\/([\w-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([\w-]{11})/
    ];
    for (const p of patterns) {
        const m = url.match(p);
        if (m && m[1]) return m[1];
    }
    return null;
}

function openIframeModal(videoUrl, caption) {
    const iframeContainer = document.getElementById('video-iframe-container');
    const iframe = document.getElementById('video-lightbox-iframe');
    if (!iframeContainer || !iframe) return;
    const ytId = extractYouTubeID(videoUrl);
    if (ytId) {
        iframe.src = `https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&autoplay=1`;
    } else {
        iframe.src = videoUrl;
    }
    const captionEl = document.getElementById('video-lightbox-caption');
    if (captionEl) captionEl.textContent = caption || '';

    iframeContainer.style.display = 'block';

    // The original code reused video-lightbox for background?
    // Let's check html... yes, video-iframe-container is inside subgallery-content?
    // Or it might be independent.
    // In the HTML it is inside subgallery-content which is inside subgallery-modal.
    // But original code did `vb.style.display = 'flex'` (video-lightbox).
    // Let's assume the iframe is stand-alone or reuses the styling.

    // In original HTML:
    // <div class="video-lightbox" id="video-lightbox" style="display:none;"> ... </div>
    // It seems the iframe container was separate in structure but maybe z-index usage.

    const vb = document.getElementById('video-lightbox');
    if (vb) {
        vb.style.display = 'flex'; // Use lightbox background
        // Hide standard video player if present to avoid conflict?
        const vidPlayer = document.getElementById('video-lightbox-video');
        if (vidPlayer) vidPlayer.style.display = 'none';
        // But iframe container is somewhere else? 
        // The HTML structure puts iframe container detailed inside .subgallery-content?
        // Wait, looking at HTML provided:
        // <div class="video-iframe-container" ...> ... </div>
        // is inside .subgallery-content.

        // So we probably don't need 'video-lightbox' unless it's just for the overlay?
        // But subgallery-modal is already the overlay.

        // Refined logic: Just show iframeContainer.
        // It has its own close button.
    }

    iframe.setAttribute('title', caption || 'Wideo');
    document.body.style.overflow = 'hidden';
}
