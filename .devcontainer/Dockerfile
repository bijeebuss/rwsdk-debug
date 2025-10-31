FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    ca-certificates \
    zsh \
    curl \
    wget \
    gnupg \
    ca-certificates \
    curl \
    wget \
    gnupg \
    lsb-release \
    bash \
    coreutils \
    util-linux \
    findutils \
    grep \
    gawk \
    sed \
    nano \
    tar \
    gzip \
    unzip \
    rsync \
    iputils-ping \
    net-tools \
    iproute2 \
    nmap \
    openssh-client \
    dnsutils \
    htop \
    strace \
    lsof \
    procps \
    python3 \
    git \
    jq \
    podman \
    pass \
    faketime \
    sudo \
    lsb-release \
    bash \
    coreutils \
    util-linux \
    findutils \
    grep \
    gawk \
    sed \
    nano \
    tar \
    gzip \
    unzip \
    curl \
    wget \
    rsync \
    iputils-ping \
    net-tools \
    iproute2 \
    nmap \
    openssh-client \
    dnsutils \
    htop \
    strace \
    lsof \
    procps \
    python3 \
    git \
    jq \
    podman \
    pass \
    faketime \
    sudo \
    && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && apt-get update \
    && apt-get install -y docker-ce-cli

RUN echo "ubuntu ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# install envx
RUN curl -sfS https://dotenvx.sh | sh

# change default shell to zsh
RUN chsh -s /bin/zsh

# temporal
RUN wget https://github.com/temporalio/cli/releases/download/v1.5.0/temporal_cli_1.5.0_linux_amd64.tar.gz \
    && tar -xvf temporal_cli_1.5.0_linux_amd64.tar.gz \
    && chmod oug+x temporal \
    && mv temporal /usr/local/bin/

USER ubuntu

# Install fnm using the official installation script
ENV FNM_DIR=/home/ubuntu/.fnm
ENV PATH=$FNM_DIR/aliases/default/bin:$PATH
RUN curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "$FNM_DIR" --skip-shell
RUN echo 'eval "$(/home/ubuntu/.fnm/fnm env --use-on-cd)"' >> /home/ubuntu/.bashrc
RUN /home/ubuntu/.fnm/fnm install 22
RUN /home/ubuntu/.fnm/fnm default 22
RUN /home/ubuntu/.fnm/fnm --version && node --version && npm --version

# gemini
RUN npm install -g @google/gemini-cli
# claude-code
RUN npm install -g @anthropic-ai/claude-code

# Command to start zsh
CMD ["/bin/zsh"]
