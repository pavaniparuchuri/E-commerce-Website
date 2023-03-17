#include <openssl/evp.h>
#include <openssl/err.h>

/* Open the file to be encrypted and read its content */
FILE *file = fopen("file_to_encrypt.txt", "rb");
fseek(file, 0, SEEK_END);
long file_size = ftell(file);
rewind(file);
unsigned char *file_content = malloc(file_size);
fread(file_content, 1, file_size, file);

unsigned char iv[16];
rc = RAND_bytes(iv, 16);
EVP_CIPHER_CTX *ctx = EVP_CIPHER_CTX_new();
EVP_EncryptInit_ex(ctx, EVP_aes_128_cbc(), NULL, key, iv);
unsigned char *encrypted_content = malloc(file_size + EVP_MAX_BLOCK_LENGTH);
int encrypted_content_size = 0;
EVP_EncryptUpdate(ctx, encrypted_content, &encrypted_content_size, file_content, file_size);
int final_encrypted_content_size;
EVP_EncryptFinal_ex(ctx, encrypted_content + encrypted_content_size, &final_encrypted_content_size);
FILE *encrypted_file = fopen("encrypted_file.bin", "wb");
fwrite(encrypted_content, 1, encrypted_content_size + final_encrypted_content_size, encrypted_file);
fclose(encrypted_file);

FILE *iv_file = fopen("iv.bin", "wb");
fwrite(iv, 1, 16, iv_file);
fclose(iv_file);
free(file_content);
free(encrypted_content);
EVP_CIPHER_CTX_free(ctx);

