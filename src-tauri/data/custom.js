// 等待文档加载完成
onDocumentReady(() => {
    // 创建启动页面容器
    const splashScreen = createSplashScreen();
    document.body.appendChild(splashScreen);

    // 创建进度条
    const progressBar = createProgressBar();
    splashScreen.appendChild(progressBar);

    // 模拟加载进度
    simulateLoading(progressBar, splashScreen);

    // 添加控制台日志
    console.log(
        '%cbuild from PakePlus： <url id="d0qhn8k7fff3ji10uo0g" type="url" status="parsed" title="GitHub - Sjj1024/PakePlus: Turn any webpage/Vue/React and so on into desktop and mobile app under 5M with easy in few minutes. 轻松将任意网站/Vue/React等项目构建为轻量级(小于5M)多端桌面应用和手机应用仅需几分钟. https://www.pakeplus.com" wc="8231">https://github.com/Sjj1024/PakePlus</url> ',
        'color:orangered;font-weight:bolder'
    );

    // 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
    const hookClick = (e) => {
        const origin = e.target.closest('a');
        const isBaseTargetBlank = document.querySelector('head base[target="_blank"]');
        console.log('origin', origin, isBaseTargetBlank);
        if (
            (origin && origin.href && origin.target === '_blank') ||
            (origin && origin.href && isBaseTargetBlank)
        ) {
            e.preventDefault();
            console.log('handle origin', origin);
            location.href = origin.href;
        } else {
            console.log('not handle origin', origin);
        }
    };

    document.addEventListener('click', hookClick, { capture: true });
});

// 创建启动页面容器
function createSplashScreen() {
    return createElement('div', {
        id: 'splash-screen',
        style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f07c2e', // 更改为与图像一致的背景颜色
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: '1000'
        },
        children: [
            {
                tagName: 'div',
                style: {
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#ffffff', // 更改为与图像一致的字体颜色
                    marginBottom: '10px'
                },
                textContent: '逸梦人工智能'
            },
            {
                tagName: 'div',
                style: {
                    fontSize: '18px',
                    color: '#ffffff', // 更改为与图像一致的字体颜色
                    marginBottom: '20px'
                },
                textContent: '智能科技，创新未来'
            }
        ]
    });
}

// 创建进度条
function createProgressBar() {
    return createElement('div', {
        className: 'progress-bar-container',
        style: {
            width: '50%', // 调整进度条长度为50%
            height: '10px',
            backgroundColor: '#ddd',
            borderRadius: '5px',
            overflow: 'hidden',
            marginBottom: '10px'
        },
        children: [
            {
                tagName: 'div',
                className: 'progress-bar',
                style: {
                    height: '100%',
                    width: '0%',
                    backgroundColor: '#4caf50',
                    transition: 'width 0.5s'
                }
            }
        ]
    });
}

// 模拟加载进度
function simulateLoading(progressBar, splashScreen) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.querySelector('.progress-bar').style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500); // 稍微延迟隐藏启动页面，让进度条动画更完整
        }
    }, 200); // 每200ms增加10%进度

    // 倒计时功能
    const countdown = document.createElement('div');
    countdown.style.fontSize = '16px';
    countdown.style.color = '#ffffff'; // 更改为与图像一致的字体颜色
    countdown.textContent = '2秒后自动进入';
    splashScreen.appendChild(countdown);

    let seconds = 2;
    const countdownInterval = setInterval(() => {
        seconds--;
        countdown.textContent = `${seconds}秒后自动进入`;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            clearInterval(interval); // 停止进度条动画
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500); // 稍微延迟隐藏启动页面，让进度条动画更完整
        }
    }, 1000);
}

// 辅助函数：创建元素
function createElement(tagName, options) {
    const element = document.createElement(tagName);

    if (options.id) {
        element.id = options.id;
    }
    if (options.className) {
        element.className = options.className;
    }
    if (options.style) {
        Object.assign(element.style, options.style);
    }
    if (options.textContent) {
        element.textContent = options.textContent;
    }
    if (options.children) {
        options.children.forEach(child => {
            const childElement = createElement(child.tagName, child);
            element.appendChild(childElement);
        });
    }

    return element;
}

// 辅助函数：等待文档加载完成
function onDocumentReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}
// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('#app > div > div > div.tip');
                if (element0) {
                    element0.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
