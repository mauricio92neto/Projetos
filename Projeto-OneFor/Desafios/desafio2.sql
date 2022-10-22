SELECT
COUNT(*) AS cancoes,
(SELECT COUNT(*) FROM SpotifyClone.artista) AS artistas,
(SELECT COUNT(*) FROM SpotifyClone.albums) AS albuns
FROM SpotifyClone.cancoes A;