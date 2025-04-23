import { Component } from '@angular/core';
import { PromptBuilderComponent } from './prompt-builder/prompt-builder.component';

@Component({
  selector: 'app-root',
  imports: [PromptBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ai-promptscribe';
}
