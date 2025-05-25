import './Video.scss'

export function Video({ src = '' }) {
    return (
        <div className="video">
            <iframe src={src}></iframe>
        </div>
    )
}