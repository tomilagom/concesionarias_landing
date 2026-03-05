import React, { useState, useEffect, useRef } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStarter, setShowStarter] = useState(true); // Always true initially, animation-delay handles visibility
  const [inputValue, setInputValue] = useState('Quiero más información');
  const [showAlert, setShowAlert] = useState(false);
  const alertTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setShowStarter(false);
    }
  };

  const handleSendMessage = () => {
    const phoneNumber = '5491163542275';
    const message = inputValue.trim();

    if (message === '') {
      setShowAlert(true);
      if (alertTimeout.current) clearTimeout(alertTimeout.current);
      alertTimeout.current = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    const waPrefix = 'Vengo de concesionaria.ai: ';
    const waUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(waPrefix)}${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');
    setInputValue('');
  };

  const handleCloseStarter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowStarter(false);
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const chatBox = document.getElementById('wa-w-chat-box');
      const launcher = document.getElementById('wa-w-launcher');
      if (chatBox && isOpen && !chatBox.contains(e.target as Node) && !launcher?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <style jsx global>{`
        #wa-w-launcher, #wa-w-chat-box, #wa-w-starter, 
        #wa-w-launcher *, #wa-w-chat-box *, #wa-w-starter * {
            box-sizing: border-box;
        }

        #wa-w-launcher {
            position: fixed;
            bottom: 25px;
            right: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 55px;
            width: 55px;
            border-radius: 50%;
            background-color: #25d366;
            color: #ffffff;
            z-index: 99999;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            text-decoration: none;
        }

        #wa-w-launcher:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
        }

        #wa-w-starter {
            position: fixed;
            bottom: 95px; 
            right: 25px;
            background: white;
            padding: 14px 18px;
            padding-right: 30px;
            border-radius: 16px 16px 2px 16px; 
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            z-index: 99998;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.4;
            color: #111b21;
            display: flex;
            flex-direction: column;
            gap: 4px;
            max-width: 200px;
            transition: opacity 0.3s, transform 0.3s;
            opacity: 0;
            transform-origin: bottom right;
            animation: wa-w-bubble-appear 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            animation-delay: 10s;
        }

        #wa-w-starter-close {
            position: absolute;
            top: 6px;
            right: 6px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #9ca3af;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.2s;
            z-index: 10;
            border-radius: 50%;
            pointer-events: auto;
        }
        #wa-w-starter-close:hover {
            color: #4b5563;
            background-color: rgba(0,0,0,0.05);
        }

        @keyframes wa-w-bubble-appear {
            0% { opacity: 0; transform: scale(0.5) translateY(20px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        #wa-w-chat-box {
            position: fixed;
            bottom: -450px; 
            right: 25px;
            display: flex;
            flex-direction: column;
            height: 400px; 
            width: 350px;
            border-radius: 16px;
            background-color: #e5ddd5; 
            z-index: 999999;
            transition: bottom 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
            opacity: 0;
            visibility: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        #wa-w-chat-box.active {
            bottom: 90px;
            opacity: 1;
            visibility: visible;
        }

        .wa-w-header {
            padding: 15px 20px;
            background-color: #008069;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 16px 16px 0 0;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .wa-w-header-title h4 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: white;
        }

        .wa-w-header-title span {
            font-size: 12px;
            opacity: 0.9;
            color: white;
        }

        .wa-w-close-btn {
            width: 30px;
            height: 30px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 1;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s;
        }

        .wa-w-close-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .wa-w-messages-area {
            flex: 1;
            padding: 20px 15px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .wa-w-message {
            background: #ffffff;
            padding: 8px 12px;
            border-radius: 0 12px 12px 12px;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
            max-width: 80%;
            font-size: 14px;
            line-height: 1.4;
            position: relative;
            align-self: flex-start;
            color: #111b21;
        }

        .wa-w-timestamp {
            font-size: 10px;
            color: #999;
            float: right;
            margin-top: 5px;
            margin-left: 10px;
        }

        .wa-w-footer {
            background-color: #f0f2f5;
            padding: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            min-height: 60px;
            z-index: 2;
        }

        .wa-w-input-group {
            flex: 1;
            background: #ffffff;
            border-radius: 24px;
            padding: 8px 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 1px 0 rgba(0,0,0,0.05);
        }

        .wa-w-emoji-icon {
            color: #8696a0;
            cursor: pointer;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s;
        }
        .wa-w-emoji-icon svg { width: 20px; height: 20px; fill: currentColor; }

        #wa-w-input-field {
            flex: 1;
            border: none;
            outline: none;
            font-size: 15px;
            color: #111b21;
            background: transparent;
            padding: 0;
            margin: 0;
            border-radius: 0px;
            min-height: auto;
        }
        #wa-w-input-field::placeholder { color: #8696a0; }

        #wa-w-send-btn {
            background: #008069;
            color: white;
            border: none;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            box-shadow: 0 1px 2px rgba(0,0,0,0.2);
            flex-shrink: 0; 
            padding: 0; 
        }
        #wa-w-send-btn svg { width: 18px; height: 18px; fill: currentColor; margin-left: 3px; }

        #wa-w-alert-box {
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 24px;
            font-size: 14px;
            z-index: 9999999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s;
            font-family: sans-serif;
            width: max-content;
        }
        #wa-w-alert-box.show { opacity: 1; visibility: visible; }

        @media (max-width: 480px) {
            #wa-w-chat-box {
                width: 90vw;
                right: 5vw;
                bottom: -100vh;
                height: 60vh;
            }
            #wa-w-chat-box.active {
                bottom: 90px;
            }
            #wa-w-starter {
                display: none;
            }
        }
      `}</style>

      {showStarter && (
        <div id="wa-w-starter">
          <span id="wa-w-starter-close" onClick={handleCloseStarter}>&times;</span>
          <h5>¡Hola! 👋</h5>
          <p>¿Cómo podemos ayudarte hoy?</p>
        </div>
      )}

      <div id="wa-w-launcher" onClick={toggleChat}>
        <svg width="35" height="35" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.9 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </div>

      <aside id="wa-w-chat-box" className={isOpen ? 'active' : ''}>
        <div className="wa-w-header">
          <div className="wa-w-header-title">
            <h4>Equipo de Producto</h4>
            <span>Normalmente responde al instante</span>
          </div>
          <div className="wa-w-close-btn" onClick={() => setIsOpen(false)}>&times;</div>
        </div>
        <div className="wa-w-messages-area">
          <div className="wa-w-message">
            <span>¡Hola! 👋</span>
            <span className="wa-w-timestamp">09:49</span>
          </div>
          <div className="wa-w-message">
            <span>¿Cómo podemos ayudarte hoy?</span>
            <span className="wa-w-timestamp">09:49</span>
          </div>
        </div>
        <div className="wa-w-footer">
          <div className="wa-w-input-group">
            <div className="wa-w-emoji-icon">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm5-12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 18c2.757 0 5.243-1.59 6.364-4H5.636C6.757 16.41 9.243 18 12 18z"
                ></path>
              </svg>
            </div>
            <input
              id="wa-w-input-field"
              type="text"
              placeholder="Escribe un mensaje"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          </div>
          <button id="wa-w-send-btn" onClick={handleSendMessage}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
        </div>
      </aside>

      <div id="wa-w-alert-box" className={showAlert ? 'show' : ''}>
        Por favor, escribe un mensaje primero.
      </div>
    </>
  );
};

export default WhatsAppWidget;
