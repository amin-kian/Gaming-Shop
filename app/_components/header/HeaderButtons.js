import HeaderButton from "@/app/_components/header/HeaderButton";

export default function HeaderButtons({cartItemCount}) {
    return (
        <div className='flex items-center gap-4'>
            <HeaderButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 64 64" fill="currentColor">
                    <path
                        d="M56,64V57.48A8.43,8.43,0,0,0,47.56,49H16.44A8.43,8.43,0,0,0,8,57.48V64H.9V57.48A15.53,15.53,0,0,1,16.44,41.94H47.56A15.53,15.53,0,0,1,63.1,57.48V64Zm-23.47-27a18.66,18.66,0,0,1-13.11-5.43,18.54,18.54,0,0,1,0-26.22A18.53,18.53,0,0,1,51.07,18.51,18.52,18.52,0,0,1,32.54,37.05Zm0-30a11.44,11.44,0,1,0,8.09,3.35A11.36,11.36,0,0,0,32.54,7.07Z"></path>
                </svg>
                <span>Login</span>
            </HeaderButton>

            <HeaderButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path
                        d="M6.59 5.17L1.41 0L0 1.41L5.17 6.58L6.59 5.17ZM10.5 0L12.54 2.04L0 14.59L1.41 16L13.96 3.46L16 5.5V0H10.5ZM10.83 9.41L9.42 10.82L12.55 13.95L10.5 16H16V10.5L13.96 12.54L10.83 9.41Z"></path>
                </svg>
                <span>Compare</span>
            </HeaderButton>

            <HeaderButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="currentColor">
                    <path
                        d="M9.90736 15.2534L9.80926 15.3515L9.70136 15.2534C5.04196 11.0256 1.96185 8.22997 1.96185 5.3951C1.96185 3.43324 3.43324 1.96185 5.3951 1.96185C6.90572 1.96185 8.37711 2.94278 8.897 4.27684H10.7215C11.2414 2.94278 12.7128 1.96185 14.2234 1.96185C16.1853 1.96185 17.6567 3.43324 17.6567 5.3951C17.6567 8.22997 14.5766 11.0256 9.90736 15.2534ZM14.2234 0C12.5166 0 10.8785 0.79455 9.80926 2.04033C8.74005 0.79455 7.10191 0 5.3951 0C2.37384 0 0 2.36403 0 5.3951C0 9.09319 3.33515 12.1243 8.38692 16.7052L9.80926 18L11.2316 16.7052C16.2834 12.1243 19.6185 9.09319 19.6185 5.3951C19.6185 2.36403 17.2447 0 14.2234 0Z"></path>
                </svg>
                <span>Wishlist</span>
            </HeaderButton>

            <div className="h-7 w-px bg-white"></div>

            <HeaderButton>
                <div className='relative'>
                    <svg className="lg:hdt-block hdt-hidden" xmlns="http://www.w3.org/2000/svg" width="28" height="32"
                         viewBox="0 0 26 29" fill="currentColor">
                        <path
                            d="M24.5556 29H1.44444C1.06135 29 0.693954 28.8472 0.423068 28.5753C0.152182 28.3034 0 27.9346 0 27.55V1.45C0 1.06544 0.152182 0.696623 0.423068 0.424695C0.693954 0.152767 1.06135 0 1.44444 0H24.5556C24.9386 0 25.306 0.152767 25.5769 0.424695C25.8478 0.696623 26 1.06544 26 1.45V27.55C26 27.9346 25.8478 28.3034 25.5769 28.5753C25.306 28.8472 24.9386 29 24.5556 29ZM23.1111 26.1V2.9H2.88889V26.1H23.1111ZM8.66667 5.8V8.7C8.66667 9.85369 9.12321 10.9601 9.93587 11.7759C10.7485 12.5917 11.8507 13.05 13 13.05C14.1493 13.05 15.2515 12.5917 16.0641 11.7759C16.8768 10.9601 17.3333 9.85369 17.3333 8.7V5.8H20.2222V8.7C20.2222 10.6228 19.4613 12.4669 18.1069 13.8265C16.7525 15.1862 14.9155 15.95 13 15.95C11.0845 15.95 9.24755 15.1862 7.89312 13.8265C6.53869 12.4669 5.77778 10.6228 5.77778 8.7V5.8H8.66667Z"></path>
                    </svg>
                    <span
                        className="absolute -top-3 -right-3 bg-purple-500 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                </div>
            </HeaderButton>
        </div>
    )
}