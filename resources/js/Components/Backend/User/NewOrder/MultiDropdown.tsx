import { useState, createContext, useContext, PropsWithChildren, Dispatch, SetStateAction, InputHTMLAttributes, LiHTMLAttributes } from 'react';
import DropdownSelect from '@/Components/General/DropdownSelect';
import { Service } from '@/types';
import { t } from 'i18next';
import InputwIcon from '@/Components/Frontend/General/InputwIcon';
import { FaSearch } from 'react-icons/fa';
import './MultiDropdown.scss';

const defaultService = {
    id: 1,
    type: 'Default',
    parent_category: 1,
    category: 'Cheapest Services',
    name: 'Telegram - Post Views ~ 100k/days ~ INSTANT',
    desc: '<p style="line-height: 20px;">Link: https://www.tiktok.com/@username OR @username<br>Start: 0-30 Min<br>Speed: 1k-50k/Day <br>Refill: No Refill<br><br>Note:<br>- Check the link format carefully before placing the order.<br>- Kindly make sure your account is public, Not private.<br>- When the service is busy, the starting speed of the operation changes.<br>- Do not place a second order on the same link before completing your order.</p>',
    rate: 0.0088,
    min: 10,
    max: 50000,
    dripfeed: false,
    refill: false,
    cancel: false
};

const MultiDropdownContext = createContext<{
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
    categories: Array<Service>;
    setCategories: Dispatch<SetStateAction<Array<Service>>>;
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}>({
    category: '',
    setCategory: () => { },
    categories: [
        defaultService
    ],
    setCategories: () => { },
    search: '',
    setSearch: () => { }
});


const MultiDropdown = ({ services = [], service, setService, general_category = '' }: PropsWithChildren & { services: Array<Service>, service: Service, setService: Dispatch<SetStateAction<Service>>, general_category: string }) => {
    const [search, setSearch] = useState('');

    var grouped_data: any = {}
    var query = search.split(' ');

    for (var index in query) {
        query[index] = query[index].toLowerCase();
    }

    if (general_category && general_category != 'Everything') {
        query.push(general_category.toLowerCase());
    }

    services.forEach(row => {
        var cat;
        cat = row['category'];
        for (var string in query) {
            string = query[string];
            if (cat.toLowerCase().indexOf(string) == -1) {
                return;
            }
        }
        if (!grouped_data[cat]) {
            grouped_data[cat] = [];
        }
        grouped_data[cat].push(row)
    });
    
    const [category, setCategory] = useState(services[0].category);
    const [categories, setCategories] = useState(grouped_data[category]);

    function processService(service: Service) {
        var link = document.getElementById('example_link'),
            start_time = document.getElementById('example_start_time'),
            speed = document.getElementById('example_speed'),
            guaranteed = document.getElementById('example_guaranteed'),
            average_time = document.getElementById('example_average_time'),
            description = document.getElementById('example_description'),
            quantity = document.getElementById('quantity'),
            charge = document.getElementById('charge');

        var desc = service.desc;
        var mem;

        if (quantity) {
            quantity.setAttribute('min', service.min.toString())
            quantity.setAttribute('max', service.max.toString())
        }

        if (link) {
            if (desc.indexOf('Link:') != -1) {
                mem = desc.split('Link:');
                if (mem && mem.length == 2) {
                    mem = mem[1];
                    mem = mem.split('<br>');
                    if (mem && mem.length) {
                        mem = mem[0];
                        if (mem) {
                            link.innerHTML = mem;
                        }
                    }
                }
            } else {
                link.innerHTML = '-';
            }
        }

        if (start_time) {
            if (desc.indexOf('Start:') != -1) {
                mem = desc.split('Start:');
                if (mem && mem.length == 2) {
                    mem = mem[1];
                    mem = mem.split('<br>');
                    if (mem && mem.length) {
                        mem = mem[0];
                        if (mem) {
                            start_time.innerHTML = mem;
                        }
                    }
                }
            } else if (desc.indexOf('Time:') != -1) {
                mem = desc.split('Time:');
                if (mem && mem.length == 2) {
                    mem = mem[1];
                    mem = mem.split('<br>');
                    if (mem && mem.length) {
                        mem = mem[0];
                        if (mem) {
                            start_time.innerHTML = mem;
                        }
                    }
                }
            } else {
                start_time.innerHTML = '-';
            }
        }


        if (speed) {
            if (desc.indexOf('Speed:') != -1) {
                mem = desc.split('Speed:');
                if (mem && mem.length == 2) {
                    mem = mem[1];
                    mem = mem.split('<br>');
                    if (mem && mem.length) {
                        mem = mem[0];
                        if (mem) {
                            speed.innerHTML = mem;
                        }
                    }
                }
            } else {
                speed.innerHTML = '-';
            }
        }

        if (guaranteed) {
            if (desc.indexOf('Refill:') != -1) {
                mem = desc.split('Refill:');
                if (mem && mem.length == 2) {
                    mem = mem[1];
                    mem = mem.split('<br>');
                    if (mem && mem.length) {
                        mem = mem[0];
                        if (guaranteed && mem) {
                            guaranteed.innerHTML = mem;
                        }
                    }
                }
            } else if (desc.indexOf('Refill:') != -1) {
                mem = desc.split('Refill:');
                if (mem && mem.length == 2) {
                    mem = mem[1];
                    mem = mem.split('<br>');
                    if (mem && mem.length) {
                        mem = mem[0];
                        if (guaranteed && mem) {
                            guaranteed.innerHTML = mem;
                        }
                    }
                }
            } else {
                guaranteed.innerHTML = '-'
            }
        }


        if (description) {
            description.innerHTML = (desc ? desc : '-')
        };
    }

    return (
        <MultiDropdownContext.Provider value={{ search, setSearch, category, setCategory, categories, setCategories }}>
            <InputwIcon
                id='search'
                placeholder={t('panel.new_order.search')}
                type='input'
                value={search}
                onChange={(e) => { setSearch(e.target.value); }}
            >
                <FaSearch></FaSearch>
            </InputwIcon>
            <label className='dropdown-title'>{t('panel.new_order.category')}</label>
            <DropdownSelect callback={() => { }}>
                <DropdownSelect.HeaderHolder>
                    <DropdownSelect.Header>{category}</DropdownSelect.Header>
                </DropdownSelect.HeaderHolder>
                <DropdownSelect.Items>
                    {
                        Object.keys(grouped_data).map((key, index) => (
                            <DropdownSelect.Item
                                key={index}
                                index={index}
                                value={key}
                                onClick={(e) => { setCategory(key); setCategories(grouped_data[key]); }}>{key}</DropdownSelect.Item>
                        ))}
                </DropdownSelect.Items>
            </DropdownSelect>
            <label className='dropdown-title'>{t('panel.new_order.service')}</label>
            <DropdownSelect callback={() => { }}>
                <DropdownSelect.HeaderHolder>
                    <DropdownSelect.Header>{services[0].name}</DropdownSelect.Header>
                </DropdownSelect.HeaderHolder>
                <DropdownSelect.Items>
                    {
                        categories.map((item: Service, index: number) => (
                            <DropdownSelect.Item
                                key={index}
                                index={index}
                                value={item.id}
                                onClick={() => { setService(item); processService(item) }}>{item.name}</DropdownSelect.Item>
                        ))
                    }
                </DropdownSelect.Items>
            </DropdownSelect>
        </MultiDropdownContext.Provider>
    );
};

export default MultiDropdown;