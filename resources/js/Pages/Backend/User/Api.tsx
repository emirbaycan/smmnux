import { Head } from '@inertiajs/react';
import { PageProps, TItem } from '@/types';
import { Trans, useTranslation } from 'react-i18next';
import UserLayout from '@/Layouts/UserLayout';
import { Box, BoxHeader, BoxTextInfo, BoxesCol } from '@/Components/Backend/User/General/Box';
import './Api.scss';
import PrimaryButton from '@/Components/PrimaryButton';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import DropdownSelect from '@/Components/General/DropdownSelect';

const OrderTableContext = createContext<{
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
}>({
    open: 0,
    setOpen: () => { },
});

export default function Api({ auth }: PageProps) {
    const { t } = useTranslation();
    const instructions: any = t("panel.api.instructions", { returnObjects: true });
    const add_order = instructions.add_order.descriptions;
    const [open, setOpen] = useState(0);

    return (
        <UserLayout
            className='api'
            user={auth.user}
        >
            <Head title={t('panel.header.api.head')} />
            <BoxesCol>
                <Box>
                    <BoxTextInfo>{t('panel.api.note')}</BoxTextInfo>
                    <BoxHeader>API Documentation</BoxHeader>
                    <div className='content'>
                        <div className='border-line'>
                            <div className='head'>HTTP Method</div>
                            <div className='desc'>POST</div>
                        </div>
                        <div className='border-line'>
                            <div className='head'>API URL</div>
                            <div className='desc'>https://bulkfollows.com/api/v2</div>
                        </div>
                        <div className='border-line'>
                            <div className='head'>Your API KEY</div>
                            <div className='desc'>********************************</div>
                        </div>
                        <div className='border-line'>
                            <div className='head'>Response format</div>
                            <div className='desc'>JSON</div>
                        </div>
                        <div className='border-line'>
                            <div className='head'>Download Examples</div>
                            <div className='desc'>
                                <PrimaryButton>Example of PHP code</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </Box>
                <ActionBox
                    header={instructions.service.header}
                    descriptions={instructions.service.description}
                    example={instructions.service.example}
                ></ActionBox>
                <Box>
                    <BoxHeader>{instructions.add_order.header}</BoxHeader>
                    <DropdownSelect className="select-action-table" callback={() => { }}>
                        <DropdownSelect.HeaderHolder>
                            <DropdownSelect.Header>Order Type</DropdownSelect.Header>
                        </DropdownSelect.HeaderHolder>
                        <DropdownSelect.Items>
                            <DropdownSelect.Item
                                index={0}
                                value={0}
                                onClick={() => setOpen(0)}
                            >
                                Default
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={1}
                                value={1}
                                onClick={() => setOpen(1)}
                            >
                                Package
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={2}
                                value={2}
                                onClick={() => setOpen(2)}
                            >
                                SEO
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={3}
                                value={3}
                                onClick={() => setOpen(3)}
                            >
                                Comments
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={4}
                                value={4}
                                onClick={() => setOpen(4)}
                            >
                                Mentions
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={5}
                                value={5}
                                onClick={() => setOpen(5)}
                            >
                                Mentions with Hashtags
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={6}
                                value={6}
                                onClick={() => setOpen(6)}
                            >
                                Mentions with Custom List
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={7}
                                value={7}
                                onClick={() => setOpen(7)}
                            >
                                Mentions Hashtags
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={8}
                                value={8}
                                onClick={() => setOpen(8)}
                            >
                                Mentions User Followers
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={9}
                                value={9}
                                onClick={() => setOpen(9)}
                            >
                                Mentions Media Likers
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={10}
                                value={10}
                                onClick={() => setOpen(10)}
                            >
                                Custom Comments
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={11}
                                value={11}
                                onClick={() => setOpen(11)}
                            >
                                Comment Likes
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={12}
                                value={12}
                                onClick={() => setOpen(12)}
                            >
                                Poll
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={13}
                                value={13}
                                onClick={() => setOpen(13)}
                            >
                                Comment Replies
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={14}
                                value={14}
                                onClick={() => setOpen(14)}
                            >
                                İnvites From Groups
                            </DropdownSelect.Item>
                            <DropdownSelect.Item
                                index={15}
                                value={15}
                                onClick={() => setOpen(15)}
                            >
                                Subscriptions
                            </DropdownSelect.Item>
                        </DropdownSelect.Items>
                    </DropdownSelect>
                    <div className='content'>
                        <div className='action-tables'>
                            <ActionTableNav open={open} index={0} data={instructions.add_order.descriptions.default.description}></ActionTableNav>
                            <ActionTableNav open={open} index={1} data={instructions.add_order.descriptions.package.description}></ActionTableNav>
                            <ActionTableNav open={open} index={2} data={instructions.add_order.descriptions.seo.description}></ActionTableNav>
                            <ActionTableNav open={open} index={3} data={instructions.add_order.descriptions.comments.description}></ActionTableNav>
                            <ActionTableNav open={open} index={4} data={instructions.add_order.descriptions.mentions.description}></ActionTableNav>
                            <ActionTableNav open={open} index={5} data={instructions.add_order.descriptions.mentions_with_hashtags.description}></ActionTableNav>
                            <ActionTableNav open={open} index={6} data={instructions.add_order.descriptions.mentions_custom_list.description}></ActionTableNav>
                            <ActionTableNav open={open} index={7} data={instructions.add_order.descriptions.mentions_hashtag.description}></ActionTableNav>
                            <ActionTableNav open={open} index={8} data={instructions.add_order.descriptions.mentions_user_followers.description}></ActionTableNav>
                            <ActionTableNav open={open} index={9} data={instructions.add_order.descriptions.mentions_media_likers.description}></ActionTableNav>
                            <ActionTableNav open={open} index={10} data={instructions.add_order.descriptions.custom_comments_package.description}></ActionTableNav>
                            <ActionTableNav open={open} index={11} data={instructions.add_order.descriptions.comment_likes.description}></ActionTableNav>
                            <ActionTableNav open={open} index={12} data={instructions.add_order.descriptions.poll.description}></ActionTableNav>
                            <ActionTableNav open={open} index={13} data={instructions.add_order.descriptions.comment_replies.description}></ActionTableNav>
                            <ActionTableNav open={open} index={14} data={instructions.add_order.descriptions.invites_from_groups.description}></ActionTableNav>
                            <ActionTableNav open={open} index={15} data={instructions.add_order.descriptions.subscriptions.description}></ActionTableNav>
                        </div>
                    </div>
                    <div className='examples'>
                        <div className='example-header'>Examples</div>
                        <div className='example show'>
                            <JSONPretty data={JSON.parse(instructions.add_order.example)}></JSONPretty>
                        </div>
                    </div>
                </Box>
                <ActionBox
                    header={instructions.order_status.header}
                    descriptions={instructions.order_status.description}
                    example={instructions.order_status.example}
                ></ActionBox>
                <ActionBox
                    header={instructions.multiple_order_status.header}
                    descriptions={instructions.multiple_order_status.description}
                    example={instructions.multiple_order_status.example}
                ></ActionBox>
                <ActionBox
                    header={instructions.create_refill.header}
                    descriptions={instructions.create_refill.description}
                    example={instructions.create_refill.example}
                ></ActionBox>
                <ActionBox
                    header={instructions.create_multiple_refill.header}
                    descriptions={instructions.create_multiple_refill.description}
                    example={instructions.create_multiple_refill.example}
                ></ActionBox>
                <ActionBox
                    header={instructions.get_refill_status.header}
                    descriptions={instructions.get_refill_status.description}
                    example={instructions.get_refill_status.example}
                ></ActionBox>
                <ActionBox
                    header={instructions.get_multiple_refill_status.header}
                    descriptions={instructions.get_multiple_refill_status.description}
                    example={instructions.get_multiple_refill_status.example}
                ></ActionBox>
                <ActionBox
                    header={instructions.create_cancel.header}
                    descriptions={instructions.create_cancel.description}
                    example={instructions.create_cancel.example}
                ></ActionBox>
                <ActionBox
                    header={instructions.user_balance.header}
                    descriptions={instructions.user_balance.description}
                    example={instructions.user_balance.example}
                ></ActionBox>
            </BoxesCol>
        </UserLayout>
    );
}

function ActionBox({ header, descriptions, example }: { header: any, descriptions: any, example: any }) {
    example = JSON.parse(example);
    return (
        <Box>
            <BoxHeader>{header}</BoxHeader>
            <ActionTable data={descriptions}></ActionTable>
            <div className='examples'>
                <div className='example-header'>Examples</div>
                <div className='example show'>
                    <JSONPretty data={example}></JSONPretty>
                </div>
            </div>
        </Box>
    )
}

function ActionTable({ data }: { data: any }) {
    return (
        <table className={'action-table'}>
            <thead>
                <tr>
                    <th>Parameters</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: TItem) => (
                    <tr>
                        <td><span className='badge badge-dark'>{item.head}</span></td>
                        <td>{item.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function ActionTableNav({ open = 0, index = 0, data }: { open: number, index: number, data: any }) {
    return (
        <table className={'action-table ' + ((open == index) ? 'open' : '')}>
            <thead>
                <tr>
                    <th>Parameters</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: TItem) => (
                    <tr>
                        <td><span className='badge badge-dark'>{item.head}</span></td>
                        <td>{item.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}