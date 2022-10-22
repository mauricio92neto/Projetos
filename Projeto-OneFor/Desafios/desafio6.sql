SELECT MIN(f.value) AS faturamento_minimo,
MAX(f.value) AS faturamento_maximo,
ROUND(AVG(f.value),2)AS faturamento_medio,
SUM(f.value) AS faturamento_total
FROM SpotifyClone.usuario AS a
INNER JOIN SpotifyClone.planos AS f
ON a.id_plano = f.id_plano;