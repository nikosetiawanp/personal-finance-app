import clsx from 'clsx'

function WindowFrame() {
  const baseStyle = 'flex justify-center items-center w-[48px] h-[32px] bg-grey-900 no-drag'

  const handleMinimize = () => {
    // win?.minimize()
    window.electronAPI?.minimize()
  }

  const handleClose = () => {
    window.electronAPI?.close()
  }
  return (
    <header className="flex justify-end gap-[1px] bg-grey-900 h-[32px] border-b border-b-grey-500/30 w-full z-[1000] fixed top-0 left-0 draggable">
      {/* Minimize */}
      <button onClick={() => handleMinimize()} className={clsx(baseStyle, 'hover:bg-grey-500')}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff">
          <line x1="4" y1="8" x2="12" y2="8" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </button>
      {/* Maximize */}
      <button className={clsx(baseStyle, 'hover:bg-grey-500')}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff">
          <rect x="4" y="4" width="8" height="8" strokeWidth="1" />
        </svg>
      </button>
      {/* Close */}
      <button onClick={() => handleClose()} className={clsx(baseStyle, 'hover:bg-[#E81123]')}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff">
          <line x1="4" y1="4" x2="12" y2="12" strokeWidth="1" strokeLinecap="round" />
          <line x1="12" y1="4" x2="4" y2="12" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </button>
    </header>
  )
}

export { WindowFrame }
