import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cats = [
      { id: 1, name: 'Mr. Sweet Kitty', description:'I am sweet cat', image:'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg' },
      { id: 2, name: 'Vasia', description:'I am fat cat', image:'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'  },
      { id: 3, name: 'Kick Ass', description:'come to me and I kick your ass', image:'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'  },
      { id: 4, name: 'Lucky' , description:'I ma lucky cat', image:'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg' },
      { id: 5, name: 'Timchik', description:'I know angular5, and if you will "good boy" maybe I tell you all secrets of this framework', image:'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'  },
      { id: 6, name: 'Tim chen Ir', description:'I am dictator', image:'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'  }
    ];
    return {cats};
  }
}
