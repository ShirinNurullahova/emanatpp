import React from 'react'
import { Link } from 'react-router-dom'
import '../Error/Error.scss'

const Error = () => {
    return (
        <div className='error_page'>
            <div className='error_page_main'>
                <div className='error_page_main_h1'>
                    <svg width="347" height="257" viewBox="0 0 347 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.6562 255H90.3945V233.418H108.07V206.172H90.3945V117.695H64.7109L3.38281 213.594V233.418H58.6562V255ZM37.6602 208.027L61.293 168.77V208.027H37.6602ZM173.305 256.953C206.996 256.953 227.992 229.121 227.992 186.25C227.992 142.207 206.117 115.84 173.305 115.84C139.809 115.84 118.812 143.672 118.812 186.25C118.812 230.586 140.59 256.953 173.305 256.953ZM173.402 226.777C159.34 226.777 152.113 210.371 152.113 186.25C152.113 159.102 160.707 145.918 173.402 145.918C187.66 145.918 194.789 162.031 194.789 186.25C194.789 213.594 186.293 226.777 173.402 226.777ZM292.25 255H323.988V233.418H341.664V206.172H323.988V117.695H298.305L236.977 213.594V233.418H292.25V255ZM271.254 208.027L294.887 168.77V208.027H271.254Z" fill="#070814" />
                        <g clipPath="url(#clip0_702_224)">
                            <path d="M141.319 11.7023C141.366 8.14286 141.36 4.57735 141.319 1.01786C141.313 0.228868 141.532 -0.0120455 142.315 1.51865e-07C145.922 0.0361371 149.528 0.0361371 153.135 1.51865e-07C153.864 -0.0120455 154.042 0.228867 154.024 0.933538C153.983 2.78857 154.012 4.6436 154.012 6.50465C154.012 8.25729 153.977 10.016 154.024 11.7686C154.048 12.5696 153.9 12.919 152.992 12.9009C149.487 12.8527 145.981 12.8467 142.47 12.9009C141.532 12.919 141.307 12.6058 141.319 11.7023V11.7023Z" fill="#070814" />
                            <path d="M191.951 0.764895C191.945 0.00601906 192.319 -3.74266e-06 192.865 0.00601908C194.692 0.0240876 196.519 0.0120419 198.346 0.0120419C200.078 0.0120419 201.804 0.0481788 203.536 -3.74266e-06C204.307 -0.024095 204.675 0.102384 204.663 1.03592C204.609 4.64962 204.621 8.25729 204.657 11.871C204.663 12.666 204.408 12.9009 203.637 12.8949C200.03 12.8647 196.424 12.8708 192.817 12.8949C192.189 12.8949 191.951 12.7202 191.957 12.0517C191.981 8.2874 191.987 4.52916 191.951 0.764895V0.764895Z" fill="#070814" />
                            <path d="M206.668 48.2368C204.231 51.0013 201.805 53.7778 199.444 56.6085C198.892 57.271 198.601 56.9699 198.174 56.5905C196.65 55.2353 195.161 53.838 193.583 52.5492C180.73 42.0755 163.872 42.4248 151.433 53.4164C150.241 54.4704 149.043 55.5124 147.88 56.6025C147.352 57.1024 147.038 57.1807 146.498 56.5363C144.161 53.7537 141.765 51.0194 139.374 48.279C139.012 47.8634 138.775 47.6044 139.327 47.0804C145.828 40.9372 152.91 35.8057 161.713 33.5893C165.467 32.6437 169.264 32.1017 173.137 32.1438C184.395 32.2522 194.248 36.1068 202.754 43.5751C204.023 44.6894 205.257 45.8458 206.55 46.9359C207.084 47.3816 207.167 47.6707 206.668 48.2368V48.2368Z" fill="#070814" />
                            <path d="M141.319 11.7023C141.366 8.14286 141.36 4.57735 141.319 1.01786C141.313 0.228868 141.532 -0.0120455 142.315 1.51865e-07C145.922 0.0361371 149.528 0.0361371 153.135 1.51865e-07C153.864 -0.0120455 154.042 0.228867 154.024 0.933538C153.983 2.78857 154.012 4.6436 154.012 6.50465C154.012 8.25729 153.977 10.016 154.024 11.7686C154.048 12.5696 153.9 12.919 152.992 12.9009C149.487 12.8527 145.981 12.8467 142.47 12.9009C141.532 12.919 141.307 12.6058 141.319 11.7023V11.7023Z" fill="#F7F9FA" />
                            <path d="M191.951 0.764895C191.945 0.00601906 192.319 -3.74266e-06 192.865 0.00601908C194.692 0.0240876 196.519 0.0120419 198.346 0.0120419C200.078 0.0120419 201.804 0.0481788 203.536 -3.74266e-06C204.307 -0.024095 204.675 0.102384 204.663 1.03592C204.609 4.64962 204.621 8.25729 204.657 11.871C204.663 12.666 204.408 12.9009 203.637 12.8949C200.03 12.8647 196.424 12.8708 192.817 12.8949C192.189 12.8949 191.951 12.7202 191.957 12.0517C191.981 8.2874 191.987 4.52916 191.951 0.764895V0.764895Z" fill="#F7F9FA" />
                            <path d="M206.668 48.2368C204.231 51.0013 201.805 53.7778 199.444 56.6085C198.892 57.271 198.601 56.9699 198.174 56.5905C196.65 55.2353 195.161 53.838 193.583 52.5492C180.73 42.0755 163.872 42.4248 151.433 53.4164C150.241 54.4704 149.043 55.5124 147.88 56.6025C147.352 57.1024 147.038 57.1807 146.498 56.5363C144.161 53.7537 141.765 51.0194 139.374 48.279C139.012 47.8634 138.775 47.6044 139.327 47.0804C145.828 40.9372 152.91 35.8057 161.713 33.5893C165.467 32.6437 169.264 32.1017 173.137 32.1438C184.395 32.2522 194.248 36.1068 202.754 43.5751C204.023 44.6894 205.257 45.8458 206.55 46.9359C207.084 47.3816 207.167 47.6707 206.668 48.2368V48.2368Z" fill="#F7F9FA" />
                            <path d="M206.668 48.2368C204.231 51.0013 201.805 53.7778 199.444 56.6085C198.892 57.271 198.601 56.9699 198.174 56.5905C196.65 55.2353 195.161 53.838 193.583 52.5492C180.73 42.0755 163.872 42.4248 151.433 53.4164C150.241 54.4704 149.043 55.5124 147.88 56.6025C147.352 57.1024 147.038 57.1807 146.498 56.5363C144.161 53.7537 141.765 51.0194 139.374 48.279C139.012 47.8634 138.775 47.6044 139.327 47.0804C145.828 40.9372 152.91 35.8057 161.713 33.5893C165.467 32.6437 169.264 32.1017 173.137 32.1438C184.395 32.2522 194.248 36.1068 202.754 43.5751C204.023 44.6894 205.257 45.8458 206.55 46.9359C207.084 47.3816 207.167 47.6707 206.668 48.2368V48.2368Z" fill="#070814" />
                            <path d="M154.024 11.7686C154.048 12.5696 153.9 12.919 152.992 12.9009C149.487 12.8527 145.981 12.8467 142.47 12.9009C141.532 12.919 141.307 12.6058 141.319 11.7023C141.366 8.14286 141.36 4.57735 141.319 1.01786C141.313 0.228868 141.532 -0.0120455 142.315 1.51865e-07C145.922 0.0361371 149.528 0.0361371 153.135 1.51865e-07C153.864 -0.0120455 154.042 0.228867 154.024 0.933538C153.983 2.78857 154.012 4.6436 154.012 6.50465C154.012 8.25729 153.977 10.016 154.024 11.7686Z" fill="#070814" />
                            <path d="M204.657 11.871C204.663 12.666 204.408 12.9009 203.637 12.8949C200.03 12.8647 196.424 12.8708 192.817 12.8949C192.189 12.8949 191.951 12.7202 191.957 12.0517C191.981 8.2874 191.987 4.52916 191.951 0.764895C191.945 0.00601906 192.319 -3.74266e-06 192.865 0.00601908C194.692 0.0240876 196.519 0.0120419 198.346 0.0120419C200.078 0.0120419 201.804 0.0481788 203.536 -3.74266e-06C204.307 -0.024095 204.675 0.102384 204.663 1.03592C204.609 4.64962 204.621 8.25729 204.657 11.871Z" fill="#070814" />
                        </g>
                        <defs>
                            <clipPath id="clip0_702_224">
                                <rect width="68" height="57" fill="white" transform="translate(139)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className='error_page_main_p'>
                    <p>Səhifə tapılmadı</p>
                </div>
                <div className='error_page_main_btn'>
                    <Link to="/">
                        <button>Ana səhifə</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Error