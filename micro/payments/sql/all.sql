GRANT ALL PRIVILEGES ON *.* TO 'smm'@'%';
FLUSH PRIVILEGES;

USE smm_payments;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(100) not null,
    password varchar(500) not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE payments (
    payment_id int NOT NULL AUTO_INCREMENT,
    user_id int,
    provider smallint,
    amount float,
    details json default null,
    paid tinyint default 0,
    paid_at TIMESTAMP DEFAULT null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (payment_id)
);

CREATE TABLE payment_requests (
    payment_id int NOT NULL AUTO_INCREMENT,
    user_id int,
    provider smallint,
    amount float,
    details json,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (payment_id)
);

CREATE TABLE payment_requests_failed (
    payment_id int NOT NULL AUTO_INCREMENT,
    user_id int,
    provider smallint,
    amount float,
    details json,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (payment_id)
);

CREATE TABLE payment_providers (
    payment_provider_id int NOT NULL AUTO_INCREMENT,
    parent_category smallint,
    name varchar(200),    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (payment_provider_id)
);

CREATE TABLE payment_provider_categories (
    payment_provider_category_id int NOT NULL AUTO_INCREMENT,
    name varchar(200),    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (payment_provider_category_id)
);

INSERT INTO 
payment_providers 
(parent_category,payment_provider_id,name) 
VALUES 
(1,1,"₿ 𝐂𝐫𝐲𝐩𝐭𝐨𝐦𝐮𝐬 - 𝐔𝐒𝐃𝐓 | 𝐁𝐓𝐂 | 𝐁𝐂𝐇 | 𝐄𝐓𝐇 | 𝐋𝐓𝐂 + More [ 6％ 𝐁𝐨𝐧𝐮𝐬 ]"),
(1,2,"₿ 𝐁𝐢𝐧𝐚𝐧𝐜𝐞 𝐏𝐚𝐲 -  𝟓％ 𝐁𝐨𝐧𝐮𝐬"),
(1,3,"₿ 𝗖𝐨𝐢𝐧𝐛𝐚𝐬𝐞 ~ USDC | BTC | BTC Cash | ETH | LTC - 𝟓％ 𝐁𝐨𝐧𝐮𝐬"),
(1,4,"₿ 𝗖𝐨𝐢𝐧𝐏𝐚𝐲𝐦𝐞𝐧𝐭𝐬 ~ USDT |  BTC | BTC Cash | ETH | LTC - 𝟓％ 𝐁𝐨𝐧𝐮𝐬"),
(2,5,"🀰 𝐂𝐡𝐞𝐜𝐤𝐨𝐮𝐭 [ USD ] ~ Debit or Credit Cards | Apple/Google Pay - Min 20$"),
(2,6,"🀰 𝐂𝐡𝐞𝐜𝐤𝐨𝐮𝐭 [ AED ] ~ Debit or Credit Cards | Apple/Google Pay ~  20$ min"),
(2,7,"🀰 𝐏𝐚𝐲𝐭𝐫 ~ Debit | Credit Cards | 𝐀𝐌𝐄𝐗 - 𝟑% 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝"),
(2,8,"🀰 𝐏𝐚𝐲𝗢𝐩 [ € ] - PagoEfectivo | PIX | Gcash | Bank"),
(2,9,"🀰 𝐏𝐚𝐲𝗢𝐩 [💲]- PagoEfectivo | PIX | Gcash | Bank - 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝"),
(2,10,"🀰 𝐏𝐫𝐢𝐦𝐞𝐏𝐚𝐲𝐦𝐞𝐧𝐭 - Debit or Credit Cards - 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝"),
(2,11,"🀰 𝐂𝐚𝐫𝐝𝐥𝐢𝐧𝐤 - Debit or Credit Cards - 10% 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝"),
(3,12,"♦︎ 𝐏𝐚𝐲𝐭𝐦 ~ [ न्यूनतम 100 Rupees - Pay With 𝐔𝐏𝐈, 𝐆𝐨𝐨𝐠𝐥𝐞 𝐏𝐚𝐲, 𝐁𝐚𝐧𝐤 𝐍𝐎𝐓 Accepted  )"),
(3,13,"♦︎ 𝐂𝐚𝐬𝐡𝐌𝐚𝐚𝐥 - AdvCash | JazzCash | EasyPaisa"),
(4,14,"✦ 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 𝗠𝐨𝐧𝐞𝐲 ~ 𝟓％ 𝐁𝐨𝐧𝐮𝐬"),
(4,15,"✦ 𝐏𝐚𝐲𝐞𝐞𝐫 ~ PayPal | Skrill | Credit Card - 𝟑％ 𝐁𝐨𝐧𝐮𝐬"),
(5,16,"♦︎ 𝐕𝐢𝐞𝐭𝐧𝐚𝐦 𝐁𝐚𝐧𝐤𝐢𝐧𝐠 - Bank Transfer [ 8% 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝 ]"),
(5,17,"✄ 𝐑𝐞𝐝𝐞𝐞𝐦 - Redeem Your Point into Fund");

INSERT INTO 
payment_provider_categories 
(payment_provider_category_id,name) 
VALUES 
(1,"Crypto"),
(2,"Bank Cards/ Credit-Debit Cards"),
(3,"Local Payment"),
(4,"Online Payment"),
(5,"Others");