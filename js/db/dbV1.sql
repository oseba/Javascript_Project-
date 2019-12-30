-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 30 déc. 2019 à 17:13
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP :  7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db`
--

-- --------------------------------------------------------

--
-- Structure de la table `amphis`
--

CREATE TABLE `amphis` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `nomUtilisateur` text DEFAULT NULL,
  `type` text NOT NULL,
  `TypeDeReservation` text DEFAULT NULL,
  `dateDeReservation` date DEFAULT NULL,
  `horaires` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `salles`
--

CREATE TABLE `salles` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `nomUtilisateur` text DEFAULT NULL,
  `type` text NOT NULL,
  `TypeDeReservation` text DEFAULT NULL,
  `dateDeReservation` date DEFAULT NULL,
  `horaires` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `salles`
--

INSERT INTO `salles` (`id`, `nom`, `nomUtilisateur`, `type`, `TypeDeReservation`, `dateDeReservation`, `horaires`) VALUES
(2, 'B08', NULL, 'Salle de cours', NULL, NULL, NULL),
(3, 'B07', NULL, 'Salle de cours', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `stands`
--

CREATE TABLE `stands` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `nomUtilisateur` text DEFAULT NULL,
  `type` text DEFAULT NULL,
  `typeDeReservation` text DEFAULT NULL,
  `dateDeReservation` date DEFAULT NULL,
  `horaires` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`) VALUES
(2, 'Axel'),
(3, 'Kabeche'),
(4, 'Ranc');

-- --------------------------------------------------------

--
-- Structure de la table `users_professor`
--

CREATE TABLE `users_professor` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users_student`
--

CREATE TABLE `users_student` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `amphis`
--
ALTER TABLE `amphis`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `salles`
--
ALTER TABLE `salles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stands`
--
ALTER TABLE `stands`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users_professor`
--
ALTER TABLE `users_professor`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users_student`
--
ALTER TABLE `users_student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `amphis`
--
ALTER TABLE `amphis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `salles`
--
ALTER TABLE `salles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `stands`
--
ALTER TABLE `stands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users_professor`
--
ALTER TABLE `users_professor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users_student`
--
ALTER TABLE `users_student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `users_professor`
--
ALTER TABLE `users_professor`
  ADD CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `users_student`
--
ALTER TABLE `users_student`
  ADD CONSTRAINT `id_users` FOREIGN KEY (`id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
