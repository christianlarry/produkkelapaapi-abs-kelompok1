-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2023 at 06:03 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pdsk_android_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `toko`
--

CREATE TABLE `toko` (
  `id` int(11) NOT NULL,
  `nama_toko` varchar(200) NOT NULL,
  `daerah` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `toko`
--

INSERT INTO `toko` (`id`, `nama_toko`, `daerah`) VALUES
(1, 'CV Nusantara Jaya Mandiri', 'Desa Tanamon, Minahasa Selatan'),
(2, 'Agen Varash Classic', 'Mapanget, Manado'),
(3, 'Wale Gonofu: Art and Craft', 'Pinenek, Minahasa Utara'),
(4, 'Dapur Aisyah Manado', 'Malalayang, Manado'),
(5, 'Gudang Arang Batok Kelapa Manado', 'Paal Dua, Manado'),
(6, 'Mekar Jaya Abadi', 'Wenang, Manado'),
(7, 'Klappa', 'Wanea, Manado'),
(8, 'Makatana Coconut Oil', 'Bitung'),
(9, 'Santan Kelapa Murni TOKOROE', 'Airmadidi, Minahasa Utara'),
(10, 'Kelapa Parut dan Santan Peras', 'Wenang, Manado'),
(11, 'Kayu Kelapa Manado', 'Paal Dua, Manado'),
(12, 'Kelapa Om Jon', 'Sea, Minahasa'),
(13, 'PT. Jugul Abadi', 'Malalayang, Manado'),
(14, 'Klappertart Tante Sesi', 'Paniki Bawah, Manado'),
(15, 'Coco Monde', 'Bahu, Manado'),
(16, 'Warong Kalpa', 'Tuminting, Manado'),
(17, 'Kios Om Vecky', 'Kairagi, Manado'),
(18, 'Griya Paniki Jaya', 'Paniki Bawah, Manado'),
(19, 'Kios Berta', 'Malalayang, Manado'),
(20, 'Warung Uncle Tomi', 'Kampung Kodo, Manado'),
(21, 'Frangipani Rumah Klapertart', 'Bumi Beringin, Manado'),
(22, 'AGEN BRILINK Kios Alya', 'Malendeng, Manado'),
(23, 'Stockist HERBAL Cahaya Kasih Manado', 'Mapanget, Manado'),
(24, 'Toko Sahabat Tani', 'Malalayang, Manado'),
(25, 'Tani Purnama', 'Kombos, Manado'),
(26, 'Toko Hari-Hari', 'Banjer, Manado'),
(27, 'Guardian Teterusan Jaya', 'Mapanget, Manado'),
(28, 'Toko Manado Souvenir', 'Wenang, Manado'),
(29, 'PT. Bumi Nyiur Melambai', 'Teling atas, Manado'),
(30, 'Warung Nanda', 'Perkamil, Manado'),
(31, 'Klabat Craft ', 'Kalawat, Minahasa Utara'),
(32, 'Rumah Bas Karim', 'Singkil, Manado'),
(33, 'Coco Dose', 'Pineleng, Manado'),
(34, 'HairCare Coco', 'Kolongan, Minahasa Utara'),
(35, 'Om Utu Klapa', 'Matani, Tomohon'),
(36, 'Toko Ma Dinda', 'Girian Weru Satu, Bitung'),
(37, 'Beauty Care', 'Teling, Manado'),
(38, 'Kios Ikof', 'Malalayang, Manado'),
(39, 'Indomaret', 'Malalayang, Manado'),
(40, 'Alfamaret', 'Malalayang, Manado'),
(41, 'Kios Edi', 'Bahu, Manado'),
(42, 'Kios Jonathan', 'Malalayang, Manado'),
(43, 'Kios Pante Malalayang', 'Malalayang, Manado'),
(44, 'Jumbo', 'Manado'),
(45, 'Kios Kembar Lestari', 'Malalayang, Manado'),
(46, 'Hypermart', 'Manado'),
(47, 'Freshmart', 'Bahu, Manado'),
(48, 'Golden', 'Manado'),
(49, 'Coco Mart', 'Manado'),
(50, 'Kios Nadia', 'Malalayang, Manado'),
(51, 'Transmart', 'Bahu, Manado'),
(52, 'Kios I\'M', 'Manado'),
(53, 'Kios Mujur', 'Mahakeret, Manado'),
(54, 'Kios Gloria', 'Tikala, Manado'),
(55, 'Top Mart', 'Sario, Manado'),
(56, 'Kios Junior', 'Wanea, Manado'),
(57, 'Kios 12 Manado', 'Wanea, Manado'),
(58, 'MultiMart', 'Karombasan, Manado'),
(59, 'Manado Ecocrafts', 'Bunaken, Manado'),
(60, 'Ecotourism and Ecocrafts Shop', 'Bunaken, Mando'),
(61, 'CV. Puri Bitung Gemilang', 'Matuari, Bitung'),
(62, 'PT. Berkat Abadi Korindo', 'Matuari, Bitung'),
(63, 'CKM Herbal', 'Mapanget, Manado'),
(64, 'Christine Klappertaart', 'Tikala, Mando'),
(65, 'Dapur Aishay Manado', 'Malalayang, Mando'),
(66, 'Tokoroe santan', 'Airmadidi, Minahasa Utara'),
(67, 'Makatana VCO', 'Matuari, Bitung'),
(68, 'PT. Royal Coconut', 'Kalawat, Minahasa Utara'),
(69, 'PT. Multi Nabati Sulawesi', 'Madidir, Bitung'),
(70, 'Klabat Craft', 'Kalawat, Minahasa Utara'),
(71, 'Kawanua klappertaart', 'Mapanget, Manado'),
(72, 'Golden', 'Wenang, Manado'),
(73, 'Transmart', 'Mapanget, Manado'),
(74, 'Cahaya Coconut', 'Maesa, Bitung'),
(75, 'Indomaret', 'Karomabasa, Manado'),
(76, 'Agen minyak varash Manado', 'Mapanget, Manado'),
(77, 'Alfamart', 'Wenang, Manado'),
(78, 'Cavron Global Lembean', 'Kauditan, Minahasa Utara'),
(79, 'Multimart', 'Tomohon Tengah'),
(80, 'Grand Central', 'Tomohon Timur'),
(81, 'Century Supermarket', 'Tomohon Timur'),
(82, 'Alfamidi Matani 3', 'Tomohon '),
(83, 'Kuliner Tomohon ', 'Tomohon Tengah'),
(84, 'Warung Lia', 'Matani 3, Kec. Tomohon Tengah'),
(85, 'Tante Sel', 'Talikuran, Sonder'),
(86, 'Warung Tante Marta', 'Sendangan, Sonder'),
(87, 'Alfa Mart ', 'Tounelet, Sonder'),
(88, 'Erafone Ruko Tomohon', 'Matani 3, Kec. Tomohon Tengah'),
(89, 'Kios NIce', 'Tataaran 2,Tondano Sel, Minahasa'),
(90, 'Warung Lo\'okena', 'Tataaran 2,Tondano Sel, Minahasa'),
(91, 'FleveHart', 'Tomohon Selatan'),
(92, 'Voni Kios', 'Kolongan Atas, Sonder'),
(93, 'Indomart', 'Kolongan Atas, Sonder'),
(94, 'Kios Angell', 'Tomohon Selatan'),
(95, 'Marta Kios', 'Desa Leilem,Kec Sonder,Minahasa'),
(96, 'Warung Tante Sar', 'Desa Leilem,Kec Sonder,Minahasa'),
(97, 'Kios Tante Det', 'Desa Leilem,Kec Sonder,Minahasa'),
(98, 'Kios Tante Merie', 'Desa Leilem,Kec Sonder,Minahasa'),
(99, 'PT.sasa inti Minsel', 'Desa Radey, Minahasa Selatan'),
(100, 'Sakuramart ', 'Uwuran satu, Minahasa Selatan'),
(101, 'Kukis Tanta Cristin', 'Tumpaan, Minahasa Selatan'),
(102, 'Kelapa Sawangan', 'Perum Griya Sawanngan Lestari'),
(103, 'Galaxy Mart', 'Pakowa, Manado'),
(104, 'Toko Lourdes Mulia', 'Tompaso Baru, Minahasa Selatan'),
(105, 'Indormart', 'Desa Poopo, Minahasa Selatan'),
(106, 'Kios Basudara ', 'Desa Ranoiapo, Minahasa Selatan'),
(107, 'Alfamidi  ', 'Uwuran, Minahasa Selatan'),
(108, 'Kios Tanta Heli', 'Desa Ranoiapo, Minahasa Selatan'),
(109, 'Kios Cipa', 'Desa Ranoiapo, Minahasa Selatan'),
(110, 'Kios Unyu', 'Desa ranoiapo, Minahasa Selatan'),
(111, 'Rajin Jaya Produksi', 'Desa Poopo, Minahasa Selatan'),
(112, 'Warong Sweet', 'Desa ranoiapo, Minahasa Selatan'),
(113, 'Jual Kukis', 'Desa Ranoiapo, Minahasa Selatan'),
(114, 'Kios Om Petu', 'Airmadidi, Manado'),
(115, 'Gerobak Mas Repi', 'Singkil, Manado'),
(116, 'Toko Cemilan Wenak', 'Likupang, Minahasa Utara'),
(117, 'Kelapa Mba put', 'Karombasan, Manado'),
(118, 'Christine klappertart ', 'Tikala, Manado'),
(119, 'PT. Royal Coconut', 'Kalawat, Minahasa Utara'),
(120, 'Toko Kelapa Jaya Abadi', 'Kairagi, Manado'),
(121, 'Christine Klappertaart ', 'Wenang, Manado'),
(122, 'Lyvia Nusa Boga', 'Paal Dua, Manado'),
(123, 'CV Malabar Argo Tani', 'Malalayang, Manado'),
(124, 'Sayor Manado', 'Paniki Bawah, Manado'),
(125, 'Most Wanted Item', 'Bahu, Manado'),
(126, 'DiBi Furniture Manado', 'Tomohon'),
(127, 'Beautiful Gardens', 'Bitung'),
(128, 'DSB Shop', 'Likupang, Minahasa Utara'),
(129, 'Tunas Jaya Abadi', 'Sario, Mando'),
(130, 'Kelapa Agung Jaya', 'Malalayang, Manado'),
(131, 'Zara Craft', 'Buha, Manado'),
(132, 'Kios Narwastu', 'Langowan, Minahasa'),
(133, 'Toko Prediksi Garden', 'Paniki, Manado'),
(134, 'Warung Mas Wendy', 'Sario, Manado'),
(135, 'Kelapa Kuycoco', 'Kanaka, Manado'),
(136, 'Kerajinan Bu Dwi', 'Kawangkoan, Minahasa'),
(137, 'Kelapa Om pat', 'Paal 4, Manado'),
(138, 'Indococo', 'Airmadidi, Minajasa Utara'),
(139, 'Klapa Rajin', 'Bunaken, Manado'),
(140, 'Kios Upin Ipin', 'Karombasan, Manado'),
(141, 'Rumah Kelapa', 'Wonasa, Manado'),
(142, 'Kelapa Tante Vivi', 'Karangria, Manado'),
(143, 'Kios Tasya', 'Warembungan, Minahasa'),
(144, 'Warong Opa Max', 'Remboken, Tondano'),
(145, 'Kelapa Segar Maumbi', 'Maumbi, Minahasa Utara'),
(146, 'Kerajinan Kelapa Victory', 'Sario, Manado'),
(147, 'PT. Coco fresh co', 'Wenang, Manado'),
(148, 'Kelapa Jaya', 'Wenang, Manado'),
(149, 'Cocona Fresh', 'Bahu, Manado'),
(150, 'Mal-Coconut', 'Teling, Manado');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `toko`
--
ALTER TABLE `toko`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `toko`
--
ALTER TABLE `toko`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
