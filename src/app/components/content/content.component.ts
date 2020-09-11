import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meaning } from '../../models/meaning.model';
import { Definition } from '../../models/definition.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy {

  wordForm: FormGroup;
  word: string;
  meanings: Meaning[];
  definition: Definition;
  definitions: Definition[] = [];

  constructor(private wordService: WordsService, public fb: FormBuilder) {
    this.wordForm = this.fb.group({
      wordInput: ['', Validators.required]
    });
   }

  ngOnDestroy(): void {
    
  }

  ngOnInit() { }

  getWord() {
    this.definitions = [];
    this.word = this.wordForm.get('wordInput').value;
    this.wordService.getWord(this.word).subscribe(
      res => {
        this.meanings = res['0'].meanings;
  
        for (const data of this.meanings) {
          for(const da of data.definitions){
            this.definition = da;
            this.definition.class = data.partOfSpeech;
            this.definitions.push(this.definition);
          }
        }
        
        console.log("Definiciones Array", this.definitions);
      },
      err => {
        console.log(err);
      }
    );
  }

}
