import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent {
  title = 'Nova pessoa';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/',
    save: '/',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { label: 'Nome', property: 'name', divider: 'Dados pessoais' },
    { label: 'Data de nascimento', property: 'birthdate', type: 'date' },
    {
      label: 'Gênero',
      property: 'genre',
      gridXlColumns: 4,
      options: [
        { value: 'female', label: 'Feminino' },
        { value: 'male', label: 'Masculino' },
      ],
    },
    { label: 'Cidade', property: 'city', optionsService: 'http://192.168.0.151:12168/rest/api/protheus/editorial/v1/cities', fieldLabel: 'name', fieldValue: 'ibge', disabledInitFilter: false },
    { label: 'País', property: 'country' },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.title = params.get('id')? 'Editando' : 'Nova pessoa';
    });
  }
}
