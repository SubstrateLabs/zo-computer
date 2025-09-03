export const Handle = () => {
    if (typeof window === 'undefined') return <span>yourhandle</span>
    const hash = window.location.hash ? window.location.hash.slice(1) : ''
    const params = new URLSearchParams(hash)
    const value = (params.get('handle') || params.get('host') || 'yourhandle').trim()
    return <span>{value || 'yourhandle'}</span>
}

export const HandleLink = () => {
    if (typeof window === 'undefined') return <span>yourhandle.zo.computer</span>
    const hash = window.location.hash ? window.location.hash.slice(1) : ''
    const params = new URLSearchParams(hash)
    const value = (params.get('handle') || params.get('host') || '').trim()
    if (!value) return <span>yourhandle.zo.computer</span>
    const href = `https://${value}.zo.computer`
    return <a href={href}>{value}.zo.computer</a>
}


