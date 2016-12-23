export class InMemoryDataService {
  createDb() {
    let games = [
      { id: 1, gamename: 'First game', 
      rank1: { user: {name: 'Ivar', country: 'Netherlands'}, Score: 40000},
      rank2: { user: {name:'Rimmert', country: 'Netherlands'}, Score: 30000},
      rank3: { user: {name:'Sjaak', country: 'Netherlands'}, Score: 20000},
      rank4: { user: {name:'Henk', country: 'Netherlands'}, Score: 10000}, 
      },
      { id: 2, gamename: 'test game', 
      rank1: { user: {name:'Ivar', country: 'Netherlands'}, Score: 40000},
      rank2: { user: {name:'Rimmert', country: 'Netherlands'}, Score: 30000},
      rank3: { user: {name:'Sjaak', country: 'Netherlands'}, Score: 20000},
      rank4: { user: {name:'Henk', country: 'Netherlands'}, Score: 10000}, 
      },
      { id: 3, gamename: 'random game', 
      rank1: { user: {name:'Ivar', country: 'Netherlands'}, Score: 40000},
      rank2: { user: {name:'Rimmert', country: 'Netherlands'}, Score: 30000},
      rank3: { user: {name:'Sjaak', country: 'Netherlands'}, Score: 20000},
      rank4: { user: {name:'Henk', country: 'Netherlands'}, Score: 10000}, 
      },
      { id: 4, gamename: 'Vier', 
      rank1: { user: {name:'Ivar', country: 'Netherlands'}, Score: 40000},
      rank2: { user: {name:'Rimmert', country: 'Netherlands'}, Score: 30000},
      rank3: { user: {name:'Sjaak', country: 'Netherlands'}, Score: 20000},
      rank4: { user: {name:'Henk', country: 'Netherlands'}, Score: 10000}, 
      },
      { id: 5, gamename: 'some game', 
      rank1: { user: {name:'Ivar', country: 'Netherlands'}, Score: 40000},
      rank2: { user: {name:'Rimmert', country: 'Netherlands'}, Score: 30000},
      rank3: { user: {name:'Sjaak', country: 'Netherlands'}, Score: 20000},
      rank4: { user: {name:'Henk', country: 'Netherlands'}, Score: 10000}, 
      },
    ];
    return { games };
  }
}
