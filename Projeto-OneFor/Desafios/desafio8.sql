SELECT n.artista_name AS artista,
t.album_name AS album
FROM SpotifyClone.artista As n,
SpotifyClone.albums AS t
WHERE n.artista_name = 'Elis Regina'
AND n.artista_id =t.artista_id
ORDER BY album ASC;