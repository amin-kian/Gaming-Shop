export default function SliderNavButton({direction, onClick, disabled, customClassName}) {
    const isLeft = direction === 'left';
    const positionClass = isLeft ? '-left-15' : '-right-15';
    const icon = isLeft ? '◀' : '▶';
    const navClass = isLeft
        ? 'swiper-button-prev-custom'
        : 'swiper-button-next-custom';

    return (
        <button
            className={`
        absolute ${positionClass} top-1/2 z-10 -translate-y-1/2
        w-13 h-13 rounded-full border border-gray-800 text-gray-900
        flex items-center justify-center
        transition-all duration-300
        opacity-0 invisible pointer-events-none
        [.hover-parent:hover_&]:opacity-100
        [.hover-parent:hover_&]:visible
        [.hover-parent:hover_&]:pointer-events-auto
        disabled:opacity-30 disabled:cursor-not-allowed
        ${navClass}
        ${customClassName} 
      `}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="text-lg">{icon}</span>
        </button>
    );
}