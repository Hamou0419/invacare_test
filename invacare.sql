DROP TABLE IF EXISTS `invacare_customer`;

CREATE TABLE `invacare_customer` (
    --保戶編號
    `code` bigint unsigned NOT NULL AUTO_INCREMENT,
    --保戶姓名
    `name` varchar(100) NOT NULL,
    --加入(介紹)日期
    `registration_date` DATE NOT NULL,
    --介紹人保護編號
    `introducer_code` bigint unsigned NULL DEFAULT NULL,
    PRIMARY KEY (`code`)
) ENGINE = InnoDB AUTO_INCREMENT = 1000000001 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--INSERT模擬data
INSERT INTO
    invacare_customer (name, registration_date, introducer_code)
VALUES
    ('保戶1', '2023-11-01', NULL),
    ('保戶2', '2023-11-02', '1000000001'),
    ('保戶3', '2023-11-02', '1000000001'),
    ('保戶4', '2023-11-03', '1000000002'),
    ('保戶5', '2023-11-04', '1000000002'),
    ('保戶6', '2023-11-06', '1000000003'),
    ('保戶7', '2023-11-06', '1000000003'),
    ('保戶8', '2023-11-08', '1000000004'),
    ('保戶9', '2023-11-08', '1000000004'),
    ('保戶10', '2023-11-10', '1000000009'),
    ('保戶11', '2023-11-11', '1000000006')