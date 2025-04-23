import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type PromptField = 'what' | 'who' | 'when' | 'where' | 'why' | 'how';

@Component({
  selector: 'app-prompt-builder',
  templateUrl: './prompt-builder.component.html',
  styleUrls: ['./prompt-builder.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PromptBuilderComponent {
  copied = false;
  prompt: Record<PromptField, string> = {
    what: '',
    who: '',
    when: '',
    where: '',
    why: '',
    how: '',
  };

  fields: { key: PromptField; label: string; example: string }[] = [
    { key: 'what', label: 'What', example: 'Write a summary of a book' },
    { key: 'who', label: 'Who', example: 'For high school students' },
    {
      key: 'when',
      label: 'When',
      example: 'As if it was written in the 1800s',
    },
    {
      key: 'where',
      label: 'Where',
      example: 'In the context of European history',
    },
    {
      key: 'why',
      label: 'Why',
      example: 'To entertain and educate the reader',
    },
    { key: 'how', label: 'How', example: 'With a simple language' },
  ];

  constructor(private clipboard: Clipboard) {}

  buildPrompt(): string {
    return `${this.prompt.what.trim()} ${
      this.prompt.who.trim() ? '' + this.prompt.who : ''
    } ${this.prompt.when ? '' + this.prompt.when : ''} ${
      this.prompt.where ? '' + this.prompt.where : ''
    } ${this.prompt.why ? '' + this.prompt.why : ''} ${
      this.prompt.how ? '.' + this.prompt.how : ''
    }`;
  }

  copyPrompt(): void {
    const promptText = this.buildPrompt();
    this.clipboard.copy(promptText);
    this.copied = true;
    setTimeout(() => (this.copied = false), 2000);
  }
}
