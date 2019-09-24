import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'students',
    template:`
        <h1>{{ title }}</h1>
        <p>
            Student Name: {{ name }}
            <!--input type="text" [(ngModel)]="name"-->
        </p>
        <p>
            Student Last Name: {{ lastName }}
        </p>

        
    `
})

export class StudentsComponent implements OnInit, OnChanges, DoCheck{

    @Input() name:String;
    @Input() lastName:String;
    count = 0;

    ngOnChanges(changes: SimpleChanges){
        console.log("OnChanges");
        console.log(changes);

    }

    ngOnInit(){
        this.name = "Sam";
        this.lastName = "Williams";

        console.log("OnInit");
    }

    ngDoCheck(){
        this.count+=1;
        console.log("doCheck:"+this.count);
    }

    ngOnDestroy(){
        this.name = null;
        this.lastName =  null;
        console.log("OnDestroy");
    }
    

}