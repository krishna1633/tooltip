import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input() tooltipText: string = ''; // Tooltip text
  isVisible: boolean = false; // Tooltip visibility state
  isClickMode: boolean = false; // Track if in click mode

  // Show tooltip on mouse enter
  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter', this.tooltipText);
    if (!this.isClickMode) {
      this.isVisible = true;
      console.log('isVisible', this.isVisible);
    }
  }

  // Hide tooltip on mouse leave if not in click mode
  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave', this.tooltipText);
    if (!this.isClickMode) {
      this.isVisible = false;
    }
  }

  // Toggle tooltip visibility on click
  toggleTooltip() {
    console.log('toggleTooltip', this.tooltipText);
    this.isClickMode = !this.isClickMode;
    this.isVisible = this.isClickMode; // Show tooltip if click mode is activated
  }

  // Hide tooltip when clicking outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const isInsideTooltip = targetElement.closest('.tooltip-container');
    if (!isInsideTooltip && this.isClickMode) {
      this.isVisible = false;
      this.isClickMode = false; // Reset click mode
    }
  }
}
