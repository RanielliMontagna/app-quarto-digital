export type ButtonColors = 'primary';

export type MainColors = 'primary' | 'secondary' | 'terciary';
export type UtilitaryColors = 'success' | 'warning' | 'danger';
export type NeutralColors = 'lightGray' | 'darkGray' | 'darkBlue';

export type Colors = MainColors | UtilitaryColors | NeutralColors | `#${string}`;

export type Size = 'sm' | 'md' | 'lg';
export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Variants = 'normal' | 'outlined' | 'dashed' | 'naked';
export type FontWeight = 'slim' | 'normal' | 'bold';
