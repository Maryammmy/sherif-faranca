# 🎬 Animations System

A comprehensive, well-organized GSAP animation system for React applications with TypeScript support.

## 📁 Folder Structure

```
animations/
├── configs/           # Animation configuration constants
│   ├── durations.ts   # Duration and timing constants
│   ├── easings.ts     # Easing function constants
│   ├── delays.ts      # Delay and stagger patterns
│   ├── transforms.ts  # Transform presets and values
│   └── index.ts       # Export all configs
├── hooks/             # Custom React hooks for animations
│   ├── useGSAP.ts     # Core GSAP hook with cleanup
│   ├── usePageAnimation.ts    # Page-level animations
│   ├── useFormAnimation.ts    # Form and input animations
│   ├── useHoverAnimation.ts   # Hover effect animations
│   ├── useStaggerAnimation.ts # Stagger animations
│   └── index.ts       # Export all hooks
├── utils/             # Utility functions and helpers
│   ├── gsap-utils.ts  # Core GSAP utility functions
│   ├── animation-helpers.ts   # Common animation patterns
│   ├── timeline-builders.ts   # Complex timeline builders
│   └── index.ts       # Export all utils
├── presets/           # Pre-built animation sequences
│   ├── page-animations.ts     # Page entrance/exit animations
│   ├── form-animations.ts     # Form-specific animations
│   ├── button-animations.ts   # Button interaction animations
│   ├── card-animations.ts     # Card and component animations
│   └── index.ts       # Export all presets
├── index.ts           # Main export file
└── README.md          # This documentation
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { useAuthPageAnimation, useButtonHover } from '@/animations';

function AuthPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  
  // Page entrance animation
  const containerRef = useAuthPageAnimation({
    title: titleRef,
    form: formRef,
    illustration: illustrationRef,
  });
  
  // Button hover animation
  const { handleMouseEnter, handleMouseLeave } = useButtonHover();

  return (
    <div ref={containerRef}>
      <h1 ref={titleRef}>Welcome</h1>
      <div ref={formRef}>
        <button
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          Sign In
        </button>
      </div>
      <div ref={illustrationRef}>
        <img src="/illustration.png" alt="Auth" />
      </div>
    </div>
  );
}
```

### Form Animations

```tsx
import { useFormAnimation, useInputAnimation } from '@/animations';

function SignUpForm() {
  const { formRef, setFieldRef } = useFormAnimation(4); // 4 form fields
  const { handleFocus, handleBlur, handleTyping } = useInputAnimation();

  return (
    <form ref={formRef}>
      <div ref={setFieldRef(0)}>
        <input
          onFocus={(e) => handleFocus(e.currentTarget)}
          onBlur={(e) => handleBlur(e.currentTarget)}
          onChange={(e) => handleTyping(e.currentTarget)}
        />
      </div>
      <div ref={setFieldRef(1)}>
        <input />
      </div>
      {/* More fields... */}
    </form>
  );
}
```

### OTP Animation

```tsx
import { useOTPAnimation } from '@/animations';

function OTPForm() {
  const { containerRef, setBoxRef } = useOTPAnimation(5); // 5 OTP boxes

  return (
    <div ref={containerRef}>
      {Array.from({ length: 5 }).map((_, index) => (
        <input
          key={index}
          ref={setBoxRef(index)}
          maxLength={1}
        />
      ))}
    </div>
  );
}
```

## 🎨 Configuration

### Durations
```tsx
import { DURATIONS } from '@/animations';

// Available durations
DURATIONS.INSTANT    // 0.1s
DURATIONS.FAST       // 0.2s
DURATIONS.QUICK      // 0.3s
DURATIONS.NORMAL     // 0.5s
DURATIONS.MEDIUM     // 0.6s
DURATIONS.SLOW       // 0.8s
DURATIONS.SLOWER     // 1.0s
```

### Easings
```tsx
import { EASINGS } from '@/animations';

// Common easings
EASINGS.POWER2_OUT   // "power2.out"
EASINGS.BACK_OUT     // "back.out(1.7)"
EASINGS.ELASTIC_OUT  // "elastic.out(1, 0.3)"
```

### Transform Presets
```tsx
import { TRANSFORM_PRESETS } from '@/animations';

// Entrance states
TRANSFORM_PRESETS.ENTRANCE_FROM_BOTTOM
TRANSFORM_PRESETS.ENTRANCE_FROM_TOP
TRANSFORM_PRESETS.ENTRANCE_SCALE_ONLY

// Hover states
TRANSFORM_PRESETS.HOVER_LIFT
TRANSFORM_PRESETS.HOVER_SCALE
```

## 🔧 Custom Hooks

### useGSAP
Core hook for GSAP animations with automatic cleanup:

```tsx
import { useGSAP } from '@/animations';

function MyComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to('.my-element', { x: 100, duration: 1 });
  }, [], containerRef);
  
  return <div ref={containerRef}>...</div>;
}
```

### useStaggerAnimation
For animating multiple elements with stagger:

```tsx
import { useStaggerAnimation } from '@/animations';

function CardGrid() {
  const { containerRef, setElementRef } = useStaggerAnimation(6, 0.1);
  
  return (
    <div ref={containerRef}>
      {cards.map((card, index) => (
        <div key={card.id} ref={setElementRef(index)}>
          {card.content}
        </div>
      ))}
    </div>
  );
}
```

## 🎯 Best Practices

1. **Use consistent timing**: Stick to predefined durations and easings
2. **Cleanup animations**: Always use the provided hooks for automatic cleanup
3. **Performance**: Use GSAP context for better performance
4. **Accessibility**: Consider reduced motion preferences
5. **Stagger timing**: Use appropriate stagger amounts for different UI elements

## 🔄 Migration from Inline Animations

### Before (Inline)
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set(titleRef.current, { opacity: 0, y: 30 });
    gsap.to(titleRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power2.out" 
    });
  }, containerRef);
  
  return () => ctx.revert();
}, []);
```

### After (Using Animation System)
```tsx
const containerRef = usePageSlideIn("bottom", 30, 0);
```

## 📚 Available Hooks

- `useGSAP` - Core GSAP hook with cleanup
- `usePageAnimation` - Page entrance animations
- `useAuthPageAnimation` - Auth page specific animations
- `useFormAnimation` - Form field stagger animations
- `useOTPAnimation` - OTP input box animations
- `useInputAnimation` - Input focus/blur/typing animations
- `useButtonHover` - Button hover effects
- `useCardHover` - Card hover effects
- `useStaggerAnimation` - Generic stagger animations
- `useListStagger` - List item stagger animations
- `useGridStagger` - Grid item stagger animations

## 🎪 Animation Presets

Pre-built animation sequences for common patterns:

- `authPageEntrance` - Complete auth page animation
- `landingPageHero` - Landing page hero section
- `dashboardEntrance` - Dashboard layout animation
- `modalEntrance/Exit` - Modal animations
- `pageTransitionOut` - Page exit transitions

## 🤝 Contributing

When adding new animations:

1. Add constants to appropriate config files
2. Create reusable utility functions
3. Build custom hooks for common patterns
4. Document usage examples
5. Follow TypeScript best practices
