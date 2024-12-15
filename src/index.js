if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran1',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT1',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT2',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        hasChildren: false,
                        items: []
                    },
                    {
                        name: 'Handmade',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT3',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT4',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran3',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT5',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT6',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        hasChildren: false,
                        items: []
                    }
                ]
            }
        ]
    };

    const items = new ListItems(document.getElementById('list-items'), data);

    items.render();  
    items.init();    

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]');
            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]');
                if (open) {
                    open.addEventListener('click', () => this.toggleItems(parent));
                }
            });
        };

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data));
        };

        this.renderParent = function (data) {
            return `
                <div class="list-item" data-parent>
                    <div class="list-item__inner">
                        ${data.hasChildren ? `<img class="list-item__arrow" src="assets/img/chevron-down.png" alt="arrow" data-open>` : ''}
                        <img class="list-item__folder" src="assets/img/folder.png" alt="folder">
                        <span>${data.name}</span>
                    </div>
                    ${data.hasChildren ? this.renderChildren(data.items) : ''}
                </div>
            `;
        };

        this.renderChildren = function (children) {
            return `
                <div class="list-item__items">
                    ${children.map(item => this.renderParent(item)).join('')}
                </div>
            `;
        };

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open');
        };
    }
}
