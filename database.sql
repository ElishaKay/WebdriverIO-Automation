CREATE TABLE `question` (
  `question_id` int(11) UNSIGNED NOT NULL,
  `question_number` int(11) UNSIGNED NOT NULL,
  `question` varchar(500) DEFAULT NULL,
  `answer` varchar(500) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `question_save_date` timestamp NULL DEFAULT NULL,
  `section` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (question_id) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

