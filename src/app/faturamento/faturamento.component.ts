import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy{

  faturamento;
  faturamentoInscricao;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit() {
   this.faturamentoInscricao = this.faturamentoService.getFaturamento()
    .subscribe( dados => this.faturamento = dados)
  }

  ngOnDestroy() {
    this.faturamentoInscricao.unsubscribe();
  }

}
