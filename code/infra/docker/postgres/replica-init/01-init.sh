set -e

until pg_isready -h postgres_nodea -p 5432; do
  echo "Esperando o master..."
  sleep 15
done

rm -rf /var/lib/postgresql/data/*
PGPASSWORD=akca2jkdadsAc2 pg_basebackup -h postgres_nodea -D /var/lib/postgresql/data -U replica -Fp -Xs -P -R

touch /var/lib/postgresql/data/standby.signal

echo "replica configurado com sucesso"
