import { Component, OnInit } from '@angular/core';
import { UsageService } from '../../services/usage.service';
import { ActivatedRoute } from '@angular/router';
import { Usage } from '../../models/usage.model';

@Component({
  selector: 'app-usage-homepage',
  templateUrl: './usage-homepage.component.html',
  styleUrl: './usage-homepage.component.css',
})
export class UsageHomepageComponent implements OnInit {
  idHouse!: string | null;
  usageList: Usage[] = [];
  constructor(
    private usageService: UsageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.idHouse = this.route.snapshot.paramMap.get('idHouse');
    if (this.idHouse) {
      this.usageService.getAllUsagesHouse(this.idHouse).subscribe({
        next: (data: any) => {
          if (data && data.lo) {
            this.usageList = data.lo;
          } else {
            this.usageList = [];
          }
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
        },
      });
    }
  }
}
