/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: amphis
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `amphis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `nameUsers` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `typeDeReseravation` varchar(20) DEFAULT NULL,
  `dateDeReservation` varchar(20) DEFAULT NULL,
  `horaires` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `amphis_ibfk_1` FOREIGN KEY (`id`) REFERENCES `reservations` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: reservations
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: salles
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `salles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `nameUsers` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `typeDeReseravation` varchar(20) DEFAULT NULL,
  `dateDeReservation` varchar(20) DEFAULT NULL,
  `horaires` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `salles_ibfk_1` FOREIGN KEY (`id`) REFERENCES `reservations` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: stands
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `stands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `nameUsers` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `typeDeReseravation` varchar(20) DEFAULT NULL,
  `emplacement` varchar(20) DEFAULT NULL,
  `dateDeReservation` varchar(20) DEFAULT NULL,
  `horaires` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `stands_ibfk_1` FOREIGN KEY (`id`) REFERENCES `reservations` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users_Professor
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users_Professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `users_Professor_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users_Student
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users_Student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `users_Student_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: amphis
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: reservations
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: salles
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: stands
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: users
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: users_Professor
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: users_Student
# ------------------------------------------------------------


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
